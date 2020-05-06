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
    b."SerialNumber",
    b."Brand",
    b."Model",
    b."Price" 
    from "Bikes" b
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

    async getByUniqueKey(key: string, val: string): Promise<Bike[]>{
        let client: PoolClient;
    
    try {
            client = await connectionPool.connect();
            let sql = `${this.baseQuery} where "${key}" = $1`;
            let rs = await client.query(sql,[val]);
            return rs.rows.map(bike_rsmap)
        }catch(e){
            throw new InternalServerError()
        }finally{
            client&&client.release()
        }
    }

    async save(newBike: Bike): Promise<Bike>{
        let client: PoolClient;

        try {
            client = await connectionPool.connect();

            let sql = `
                insert into "Bikes" ("SerialNumber", "Brand", "Model", "Price") 
                values ($1, $2, $3, $4) returning id
            `
            return newBike
        }catch (e) {
            console.log(e);
            throw new InternalServerError();
        } finally {
            client && client.release();
        }
    }

}
   


