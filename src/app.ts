import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./error";
import { loginRoutes, realEstateRoutes, userRoutes, categoryRoutes, scheduleRoutes } from "./routes";

const app: Application = express();

app.use( express.json() );

app.use( "/login", loginRoutes );

app.use( "/users", userRoutes );

app.use( "/categories", categoryRoutes );

app.use( "/realEstate", realEstateRoutes );

app.use( "/schedules", scheduleRoutes );

app.use( handleError );

export default app;
