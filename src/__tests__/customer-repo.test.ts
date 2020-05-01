import { CustomerRepo as sut } from '../repos/customer-repo';
import { Customer } from '../models/customer'
import { Validator } from '../util/validator'
import {
    NotImplemented,
    AuthenticationError,
    BadRequestError,
    ResourcePersistenceError,
    ResourceNotFoundError
} from '../errors/errors'

describe('customer-repo',()=>{

    test('should return all customers when getAll is called', async ()=>{
    expect.assertions

    let result = await sut.getInstance().getall()

    expect(result)
    
})

})