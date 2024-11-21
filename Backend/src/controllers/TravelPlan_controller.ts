// Code written by Lucas Mouette

import { Request, Response } from "express";
import { add_TravelPlan } from "../services/travelplan_services";

export const create_TravelPlan = (request: Request, response: Response) => {

    let new_TravelPlan = add_TravelPlan(request.body);
    let TravelPlan_page = `<html>
                          </html>`
    response.send(TravelPlan_page)
}