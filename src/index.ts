const dotenv = require('dotenv');
const express = require('express');
const pg = require('pg')
import { CustomerRepo }  from './repos/customer-repo'
import { Pool } from 'pg';


dotenv.config();
export const coonnectionPool: Pool = new Pool({
    host: process.env['DB_HOST'],
    port: +process.env['DB_PORT'],
    database: process.env['DB_NAME'],
    user: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    max: 5
})


const app = express();
app.listen(8080, ()=> {
    console.log('running and listening on port 8080')
});

app.use(express.json())


const custRepo = CustomerRepo.getInstance();

app.get('/customers', async (req, resp)=>{
    try{
        let payload = await custRepo.getall();
        resp.status(200).json(payload)
    }catch(e){
        resp.status(404).json(e)
    }
})

