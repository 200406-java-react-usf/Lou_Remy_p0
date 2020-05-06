const dotenv = require('dotenv');
const express = require('express');

import { CustRouter }  from './routers/customer-router'
import { TxRouter } from './routers/transaction-router'
import { BikeRouter } from './routers/bike-router'
import { Pool } from 'pg';


dotenv.config();

export const connectionPool: Pool = new Pool({
    host: 'java-react-200406.c74fcz0zpcmh.us-east-2.rds.amazonaws.com',
    port: +process.env['DB_PORT'],
    database: process.env['DB_NAME'],
    user: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    max: 5
})


const app = express();
app.use('/',express.json())
app.use('/customers', CustRouter)
app.use('/transactions', TxRouter)
app.use('/bikes', BikeRouter)

app.listen(8080, ()=> {
    console.log('running and listening on port 8080')
});








