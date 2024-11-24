// Code written by Lucas Mouette

import express from "express";
import travelRoutes from "./routes/travel_routes";

const app = express();

app.use(express.json());
app.use("/travelbuddy", travelRoutes);

export default app;