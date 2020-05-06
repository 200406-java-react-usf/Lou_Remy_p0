import { Customer } from '../models/customer'
import { CustomerRepo } from '../repos/customer-repo'
import  { isValidObject }  from '../util/validator'
import {
    ResourceNotFoundError,
    BadRequestError,
    ResourcePersistenceError,
    
} from '../errors/errors'


export class CustomerService {
    constructor(private custRepo: CustomerRepo){
        this.custRepo =custRepo;
    }

    async getAllCustomers(): Promise<Customer[]> {
        let customers = await this.custRepo.getall()

        if (customers.length ==0){
            throw new ResourceNotFoundError();
        }

        return customers
    }

    async getCustbyUniqueKey(queryObj:any): Promise<Customer> {

        try {
            let queryKeys = Object.keys(queryObj)
            let key = queryKeys[0];
            let val = queryObj[key]
            let customer = await this.custRepo.getCustByUniqueKey(key, val)
            return customer
        }
        catch(e){
            throw e
        }
    }

    async addCustomer(newCust: Customer): Promise<Customer>{

        try{
            if(!isValidObject(newCust)){
                throw new BadRequestError('Invalid property values found in provided user.');
            }
        }catch(e){
            e
        }

        let emailAvailable = await this.isEmailAvailable(newCust.email)

        if (!emailAvailable) {
            throw new  ResourcePersistenceError('The provided email is already taken.');
        }

        let persistedcustomers = await this.custRepo.save(newCust)
        return persistedcustomers
    }


    private async isEmailAvailable(email: string): Promise<boolean> {
        
        try {
            await this.getCustbyUniqueKey({'email': email});
        } catch (e) {
            console.log('email is available')
            return true;
        }

        console.log('email is unavailable')
        return false;
    }

}

