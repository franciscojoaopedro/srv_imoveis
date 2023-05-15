const express =require ('express');

const cors = require("cors") 
const  routerUser = require("./src/routes/routerUser") ;
const routerSession = require("./src/routes/routerSession") ;
const  routerImobi = require("./src/routes/routerImobi") ;
const path =require('node:path') 


require ('dotenv').config()
const app=express();
const PORT= process.env.PORT || 8000;

app.use(cors());
app.use(express.json())
// para salvar imagens
app.use("/uploads",express.static(path.resolve(__dirname,'../','uploads')))


app.use(routerUser);
app.use(routerSession);
app.use(routerImobi);


app.listen(PORT,()=>{
    console.log("server is running")
})