const express = require('express');
require('dotenv').config();

const app = express();


app.use(express.static('./public'));


let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App running on PORT ${port}`);
})