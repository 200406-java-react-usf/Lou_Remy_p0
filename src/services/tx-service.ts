import { Transactions } from '../models/transactions'
import { TransactionRepo } from '../repos/transaction-repo'


export class TransactionService {
    constructor(private txRepo: TransactionRepo){
        this.txRepo =txRepo;
    }

    async getAllTransactions(): Promise<Transactions[]> {
        let transactions = await this.txRepo.getall()

        return transactions

    }

    
}