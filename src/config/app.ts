import { CustomerRepo } from '../repos/customer-repo'
import { CustomerService } from '../services/customer-service'

const custRepo = new CustomerRepo();
const customerService = new CustomerService(custRepo)



import { TransactionRepo } from '../repos/transaction-repo'
import { TransactionService } from '../services/tx-service'

const txRepo = new TransactionRepo();
const txService = new TransactionService(txRepo)

export default {
    customerService,
    txService
}