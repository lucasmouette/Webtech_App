// Code written by Lucas Mouette

import express, { Express, Response, Request } from 'express';
import TravelPlan_router from './routes/travelplan_routes';
import bodyParser from 'body-parser'

const app: Express = express();

app.use(bodyParser.json());

app.use('/travelplan', TravelPlan_router);

export default app;
