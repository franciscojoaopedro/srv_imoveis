const express =require ('express');
const SessionControllers =require ("../controllers/SessionControllers");

const routerSession=express.Router();


routerSession.post("/session",SessionControllers.createSession);

module.exports=routerSession