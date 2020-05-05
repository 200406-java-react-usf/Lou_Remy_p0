import { Customer } from '../models/customer'
import { CustomerRepo } from '../repos/customer-repo'
//import { isValidId, isValidStrings, isValidObject } from '../util/validator'
import {
    ResourceNotFoundError

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

}

