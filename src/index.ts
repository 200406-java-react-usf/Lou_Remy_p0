const dotenv = require('dotenv');
const express = require('express');
import { CustomerRepo }  from './repos/customer-repo'


dotenv.config();

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

