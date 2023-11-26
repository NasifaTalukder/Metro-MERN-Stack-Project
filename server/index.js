import express from 'express';
const app=express();
import router from './router/route.js';
import Connection from './database/databaseConnect.js';
import cors from "cors";
app.use(express.json())
app.use(cors())
// ------Get Request-----
app.get('/',(req,res)=>{
    res.status(200).send("Requested For Home Page...")
})

// -----Api Of product-------
app.use('/productApi',router);

const port =8080;

// ---------Server Connection---------
Connection().then(()=>{
    try{
        app.listen(port),
        ()=>{
            console.log(`Server Connected to",${port}`)
        }
    }
    catch(error){
        console.log("Server cannot connect to database..")

    }
})