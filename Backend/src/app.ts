// Code written by Lucas Mouette

import express, { Express, Response, Request } from 'express';
import bodyParser from 'body-parser'

const app: Express = express();

app.use(bodyParser.json());



export default app;
