import { Transactions } from '../models/transactions';
import { CrudRepo } from './crud-repo';
import {
    InternalServerError
} from '../errors/errors';
import { PoolClient } from 'pg';
import { connectionPool } from '..';
import {tx_rsmap} from '../util/rsmap';

export class TransactionRepo implements CrudRepo<Transactions> {
    baseQuery = `
    select 
    t."TransactionId",
    t."Cost",
    t."Type",
    t."CustomerId"
    from "Transactions" t`

 async getall(): Promise<Transactions[]> {

    let client: PoolClient;

    try {
        client = await connectionPool.connect()
        let sql = `${this.baseQuery}`;
        let rs = await client.query(sql)
        return rs.rows.map(tx_rsmap)
    }catch(e){
        throw new InternalServerError();
    } finally {
        client&& client.release()
    }
}

async getTransByUniqueKey(key: string, val: string): Promise<Transactions[]> {
    let client: PoolClient;
    
    try {
        client = await connectionPool.connect();
        let sql = `${this.baseQuery} where "${key}" =$1`;
        let rs = await client.query(sql,[val]);
        return rs.rows.map(tx_rsmap)
    }catch(e){
        throw new InternalServerError();
    }finally{
        client&&client.release()
    }
    

}

async save(newTx:Transactions): Promise<Transactions>{

    let client: PoolClient;

    try {
        client = await connectionPool.connect();

        let sql = `
            insert into "Transactions" ("TransactionId", "Cost", "Type", "CustomerId") 
            values ($1, $2, $3, $4) returning id
        `
        return newTx
    }catch (e) {
        console.log(e);
        throw new InternalServerError();
    } finally {
        client && client.release();
    }

}



}