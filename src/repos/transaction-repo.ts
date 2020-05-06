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
"TransactionId",
"Cost",
"Type",
"CustomerId"
 from "Transactions"`

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

async getTransByUniqueKey(key: string, val: string): Promise<Transactions> {
    let client: PoolClient;
    
    try {
        client = await connectionPool.connect();
        let sql = `${this.baseQuery} where c.${key} =$1`;
        let rs = await client.query(sql,[val]);
        return tx_rsmap(rs.rows[0])
    }catch(e){
        throw new InternalServerError();
    }finally{
        client&&client.release()
    }
    

}}