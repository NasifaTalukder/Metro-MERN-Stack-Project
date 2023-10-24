const express = require('express');
const app=express();
const route = require('./router/route');
const Connection  = require('./database/databaseConnect');
const cors = require("cors");
app.use(express.json())
app.use(cors())
// ------Get Request-----
app.get('/',(req,res)=>{
    res.status(200).send("Requested For Home Page...")
})

// -----Api Of product-------
app.use('/productApi',route);

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