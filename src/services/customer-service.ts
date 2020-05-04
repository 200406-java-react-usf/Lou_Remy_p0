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
}