import "express-async-errors";
import express, { Application } from "express";
import { movieRouter } from "./routers/movie.router";
import { handleError } from "./middlewares/handleError.middleware";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app: Application = express();
app.use(express.json());

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/movies", movieRouter);
app.use(handleError);
export default app;
