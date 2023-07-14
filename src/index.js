const express = require("express");

const {PORT} = require('./config/ServerConfig');
const { City }= require('./models/index')
const bodyParser = require("body-parser");

const setupAndStartServer =  async ()=> {
     //  create the express object  
     const app = express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}));
     
    app.listen(PORT,async ()=> {
        console.log(`Server started at ${PORT}`);  
        console.log(City);
        await City.create({
          name: "New Delhi",
        });
     }); 
     
}


setupAndStartServer(); 