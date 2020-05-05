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
import { connectionPool } from '../index';
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
    
    async getCustByUniqueKey(key: string, val: string): Promise<Customer> {
        let client: PoolClient;
        
        try {
            client = await connectionPool.connect();
            let sql = `${this.baseQuery} where c.${key} =$1`;
            let rs = await client.query(sql,[val]);
            return customer_rsmap(rs.rows[0])
        }catch(e){
            throw new InternalServerError();
        }finally{
            client&&client.release()
        }
        
        

        
    
}

}