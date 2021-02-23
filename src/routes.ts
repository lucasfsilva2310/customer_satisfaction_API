import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const UserControl = new UserController();

router.post("/users", UserControl.create);

export { router };
