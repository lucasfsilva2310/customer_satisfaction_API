import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";

const router = Router();

const UserControl = new UserController();
const SurveysControl = new SurveysController();

router.post("/users", UserControl.create);
router.post("/surveys", SurveysControl.create);
router.get("/surveys", SurveysControl.show);

export { router };
