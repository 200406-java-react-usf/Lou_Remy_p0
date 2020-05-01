import { CustomerRepo as sut } from '../repos/customer-repo';
import { Customer } from '../models/customer'
import {
    NotImplemented,
    AuthenticationError,
    BadRequestError,
    ResourcePersistenceError,
    ResourceNotFoundError
} from '../errors/errors'

describe('customer-repo',()=>{

    test('should return all customers when getAll is called', async ()=>{
    expect.assertions(1);

    let result = await sut.getInstance().getall()

    expect(result).toBeTruthy()
    
})

})