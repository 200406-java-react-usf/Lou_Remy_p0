import data from '../data/customer-data';
import { Customer } from '../models/customer';
import { CrudRepo } from './crud-repo';
import Validator from '../util/validator';
import {  
    AuthenticationError, 
    BadRequestError, 
    //NotImplementedError, 
    ResourceNotFoundError, 
    ResourcePersistenceError
} from '../errors/errors';

import { PoolClient } from 'pg';

export class CustomerRepo implements CrudRepo<Customer> {

    private static instance: CustomerRepo;

    private constructor(){}
    
    static getInstance(){
        return !CustomerRepo.instance ? CustomerRepo.instance = new CustomerRepo() : CustomerRepo.instance;

    }

    getall(): Promise<Customer[]>{
        return new Promise<Customer[]>((resolve,reject)=>{
            setTimeout(()=>{
                let customers = []

                for( let customer of data){
                    customers.push({...customer})
                }
                
                if (customers.length == 0){
                    reject(new ResourceNotFoundError())
                    return;
                }

                resolve(customers);


            },250);
        });
    }

    getById(id: number): Promise<Customer>{
        return new Promise<Customer>((resolve, reject)=>{

            if(!Validator.isValidId(id)){
                reject( new BadRequestError())
            }

            setTimeout(()=>{
                const customer = {...data.find(customer =>customer.id ===id)}

                if(Object.keys(customer).length=== 0){
                    reject(new ResourceNotFoundError());
                    return;
                }

                return resolve(customer);
            }, 250 );

        });
    }

    getCustomerByName(name: string): Promise<Customer> {
        return new Promise<Customer>((resolve,reject)=>{
            if (!Validator.isValidStings(name)){
                reject( new BadRequestError());
                return;
            }
            setTimeout(() => {
        
                const customer = {...data.filter(customer => customer.name === name)[0]};
                
                if (Object.keys(customer).length == 0) {
                    reject(new ResourceNotFoundError());
                    return;
                }
        
                resolve(customer);

        },250)
    })

}

}