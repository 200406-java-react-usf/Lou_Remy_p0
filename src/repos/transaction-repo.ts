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
        let sql = `${baseQuery}`;
        let rs = await client.query(sql)
        return rs.rows.map(tx_rsmap)
    }catch(e){
        throw new InternalServerError();
    } finally {
        client&& client.release()
    }
}
}