import { Router } from "express";
import ImobiControllers from "../controllers/ImobiControllers";
import { upload } from "./routerUpload";

const routerImobi=Router();

routerImobi.post("/createimobi", upload.single("thumb"),ImobiControllers.createImobi);
routerImobi.get("/findallimobis",ImobiControllers.findAllImobi);
routerImobi.get("/findimobi/:slug",ImobiControllers.findImobi);

export {routerImobi}