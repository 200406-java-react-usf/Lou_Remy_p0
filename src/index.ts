const dotenv = require('dotenv');
const express = require('express');

import { CustRouter }  from './routers/customer-router'
import { Pool } from 'pg';


dotenv.config();

export const connectionPool: Pool = new Pool({
    host: process.env['DB_HOST'],
    port: +process.env['DB_PORT'],
    database: process.env['DB_NAME'],
    user: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    max: 5
})


const app = express();
app.use('/',express.json())
app.use('/customers', CustRouter)

app.listen(8080, ()=> {
    console.log('running and listening on port 8080')
});








