const express =require ('express');
const ImobiControllers = require( "../controllers/ImobiControllers");
const  upload  =require("./routerUpload");


const routerImobi=express.Router();

routerImobi.post("/createimobi", upload.single("thumb"),ImobiControllers.createImobi);
routerImobi.get("/findallimobis",ImobiControllers.findAllImobi);
routerImobi.get("/findimobi/:slug",ImobiControllers.findImobi);
routerImobi.get("/imobi/:id",ImobiControllers.findImovel);

module.exports= routerImobi