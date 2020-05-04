import { CustomerSchema } from './schemas'
import { Customer } from '../models/customer'




export function customer_rsmap(rs: CustomerSchema): Customer {
    if (!rs){
        return {} as Customer;
    }

    return new Customer(
        rs.id,
        rs.firstname,
        rs.lastname,
        rs.email
    )
}



