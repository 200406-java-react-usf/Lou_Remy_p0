import { CustomerRepo } from '../repos/customer-repo'
import { CustomerService } from '../services/customer-service'

const custRepo = new CustomerRepo();
const customerService = new CustomerService(custRepo)

export default {
    customerService
}