import { Transactions } from '../models/transactions'
import { TransactionRepo } from '../repos/transaction-repo'
import { ResourceNotFoundError } from '../errors/errors';


export class TransactionService {
    constructor(private txRepo: TransactionRepo){
        this.txRepo =txRepo;
    }

    async getAllTransactions(): Promise<Transactions[]> {
         
        let transactions = await this.txRepo.getall()
    if (Object.keys(transactions).length === 0){
        throw new ResourceNotFoundError()
    }
        return transactions

    }

    async getTransByUniqueKey(queryObj:any): Promise<Transactions> {
        try {
            let queryKeys = Object.keys(queryObj)
            let key = queryKeys[0];
            let val = queryObj[key]
            let tx = await this.txRepo.getTransByUniqueKey(key, val)
            return tx
        }
        catch(e){
            throw e
    }
}}