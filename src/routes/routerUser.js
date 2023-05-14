import {Router} from "express"
import UserControllers from "../controllers/UserControllers";
import auth from "../middlewares/auth";

const routerUser=Router();
routerUser.post('/createusers',UserControllers.createUser);
routerUser.get('/listUsers', auth,UserControllers.findAllUser);
export {routerUser}