import { Transactions } from '../models/transactions'
import { TransactionRepo } from '../repos/transaction-repo'
import  { isValidObject }  from '../util/validator'
import {
    ResourceNotFoundError,
    BadRequestError,
    ResourcePersistenceError,
    
} from '../errors/errors'


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

    async getTransByUniqueKey(queryObj:any): Promise<Transactions[]> {
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

    }

    async addTransaction(newTx: Transactions): Promise<Transactions>{

        try{
            if(!isValidObject(newTx)){
                throw new BadRequestError('Invalid property values found in provided transaction.');
            }
        }catch(e){
            e
        }


        let persistedtransaction = await this.txRepo.save(newTx)
        return persistedtransaction
    }

}