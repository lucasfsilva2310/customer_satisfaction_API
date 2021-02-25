import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailController } from "./controllers/SendMailController";

const router = Router();

const UserControl = new UserController();
const SurveysControl = new SurveysController();
const sendMailControl = new SendMailController();

router.post("/users", UserControl.create);
router.post("/surveys", SurveysControl.create);
router.get("/surveys", SurveysControl.show);

router.post("/sendMail", sendMailControl.execute);

export { router };
