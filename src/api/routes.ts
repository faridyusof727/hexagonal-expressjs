import express from "express";
import {greetHandler} from "./init";

const router = express.Router();

router.get("/:name", greetHandler.greetAction);

export default router;
