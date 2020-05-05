import { CustomerSchema } from './schemas'
import { Customer } from '../models/customer'
import { Transactions } from '../models/transactions';
import{ TransactionSchema } from './schemas'




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
        rs.txid,
        rs.custid,
        rs.cost,
        rs.type,
        rs.serial
    )
}
