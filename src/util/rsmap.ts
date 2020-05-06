import { CustomerSchema } from './schemas'
import { Customer } from '../models/customer'
import { Transactions } from '../models/transactions';
import{ TransactionSchema } from './schemas'
import { Bike } from '../models/bikes';
import { BikeSchema } from './schemas'




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


export function tx_rsmap(rs: TransactionSchema): Transactions {
    if (!rs){
        return {} as Transactions;
    }

    return new Transactions(
        rs.TransactionId,
        rs.Cost,
        rs.Type,
        rs.CustomerId
    )
}

export function bike_rsmap(rs: BikeSchema): Bike {
    if (!rs){
        return {} as Bike;
    }

    return new Bike(
        rs.SerialNumber,
        rs.Brand,
        rs.Model,
        rs.Price
    )
}
