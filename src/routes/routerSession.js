import { Router } from "express";
import SessionControllers from "../controllers/SessionControllers";

const routerSession=Router();


routerSession.post("/session",SessionControllers.createSession);

export{routerSession}