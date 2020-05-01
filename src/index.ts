import dotenv from  'dotenv';
import express from 'express';
import { CustomerRepo }  from './repos/customer-repo'


dotenv.config();

const app = express();
app.listen(8080);

const custRepo = CustomerRepo.getInstance();


//app.get('/customers', async

