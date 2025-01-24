// Code written by Lucas Mouette

import express from "express";
import cors from "cors";
import travelRoutes from "./routes/travel_routes";
import auth_routes from "./routes/auth_routes";

const app = express();

app.use(cors())
app.use(express.json());
app.use("/", travelRoutes);
app.use("/", auth_routes);
app.use(express.static('public'));

export default app;