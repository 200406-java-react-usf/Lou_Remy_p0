import { Customer } from '../models/customer'

let id = 0

export default [
    new Customer(id++,'Bob','bikerbob@gmail.com','Red Unicycle'),
    new Customer(id++,'Tom','@gmail.com','White roadbike'),
    new Customer(id++,'Jane','@gmail.com','Blue mountain bike')

]