import data from '../data/customer-data';
import { Customer } from '../models/customer';
import { CrudRepo } from './crud-repo';
import Validator from '../util/validator';
import {  
    //AuthenticationError, 
    BadRequestError, 
    //NotImplementedError, 
    ResourceNotFoundError, 
    //ResourcePersistenceError,
    InternalServerError
} from '../errors/errors';

import { PoolClient } from 'pg';
import { connectionPool } from '..';
import { customer_rsmap } from '../util/rsmap'
export class CustomerRepo implements CrudRepo<Customer> {

    baseQuery = `
    select
        c.id
        c.firstname
        c.lastname
        c.email
    from customers c
    `
   

    async getall(): Promise<Customer[]>{
        let client: PoolClient;


        try{
            client = await connectionPool.connect();
            let sql =`${this.baseQuery}`;
            let rs = await client.query(sql);
            return rs.rows.map(customer_rsmap);
        } catch (e){
            throw new InternalServerError();
        } finally {
            client && client.release();
        }
        
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