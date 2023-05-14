import express from "express";
import cors from "cors"
import { routerUser } from "./routes/routerUser";
import { routerSession } from "./routes/routerSession";
import { routerImobi } from "./routes/routerImobi";
import path from 'node:path'


const app=express();
const PORT=8000;

app.use(express.json())
// para salvar imagens
app.use("/uploads",express.static(path.resolve(__dirname,'../','uploads')))
app.use(cors());


app.use(routerUser);
app.use(routerSession);
app.use(routerImobi);


app.listen(PORT,()=>{
    console.log("server is running")
})