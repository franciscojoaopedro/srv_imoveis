const express =require ('express');
const UserControllers =require ( "../controllers/UserControllers");
const auth= require  ("../middlewares/auth");

const routerUser=express.Router();

routerUser.post('/createusers',UserControllers.createUser);
routerUser.get('/user/:id',UserControllers.User);
routerUser.get('/listUsers', auth,UserControllers.findAllUser);

module.exports= routerUser;