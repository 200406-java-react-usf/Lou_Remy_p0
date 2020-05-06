import { CustomerRepo } from '../repos/customer-repo'
import { CustomerService } from '../services/customer-service'

const custRepo = new CustomerRepo();
const customerService = new CustomerService(custRepo)



import { TransactionRepo } from '../repos/transaction-repo'
import { TransactionService } from '../services/tx-service'

const txRepo = new TransactionRepo();
const txService = new TransactionService(txRepo)

import { BikeRepo } from '../repos/bike-repo'
import { BikeService } from '../services/bike-service'


const bikeRepo = new BikeRepo();
const bikeService = new BikeService(bikeRepo)

export default {
    customerService,
    txService,
    bikeService
}