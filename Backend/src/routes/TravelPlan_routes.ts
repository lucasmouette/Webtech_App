// Code written by Lucas Mouette

import express, { Request, Response} from "express";
import { create_TravelPlan } from "../controllers/travelplan_controller";

const router = express.Router()

router.get('/travelplan', (request, response) => {
    create_TravelPlan(request, response);
})

export default router;