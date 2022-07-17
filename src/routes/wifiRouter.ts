import { Router } from "express";
import { createWifi, deleteWifi, fetchOneWifi, fetchWifis } from "../controllers/wifiController.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";
import { wifiValidator } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post('/wifi',tokenValidator,wifiValidator, createWifi)
wifiRouter.get('/wifi',tokenValidator, fetchWifis)
wifiRouter.get('/wifi/:id',tokenValidator, fetchOneWifi)
wifiRouter.delete('/wifi/:id',tokenValidator, deleteWifi)

export default wifiRouter;