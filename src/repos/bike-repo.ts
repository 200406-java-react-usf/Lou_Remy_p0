import { Bike } from '../models/bikes';
import { CrudRepo } from './crud-repo';
import {
    InternalServerError
} from '../errors/errors';
import { PoolClient } from 'pg';
import { connectionPool } from '..';
import {bike_rsmap} from '../util/rsmap';


export class BikeRepo implements CrudRepo<Bike> {

    baseQuery =`
    select 
    "SerialNumber" ,
    "Brand",
    "Model",
    "Price" 
    from "Bikes" 
    `
    async getall(): Promise<Bike[]>{
        let client: PoolClient

        try{
            client = await connectionPool.connect()
        let sql = `${this.baseQuery}`;
        let rs = await client.query(sql)
        return rs.rows.map(bike_rsmap)
        }catch(e){
            throw new InternalServerError()
        }

    }

    async getByUniqueKey(key: string, val: string): Promise<Bike>{
        let client: PoolClient;
    
    try {
        client = await connectionPool.connect();
        let sql = `${this.baseQuery} where c.${key} =$1`;
        let rs = await client.query(sql,[val]);
        return bike_rsmap(rs.rows[0])
    }catch(e){
        throw new InternalServerError();
    }finally{
        client&&client.release()
    }
    

}
}   


