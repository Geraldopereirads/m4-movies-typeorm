import { Router } from "express";
import {
  createMovieController,
  readMovieController,
  updateMovieController,
  deleteMovieController,
} from "../controllers/movie.controller";
import { pagination } from "../middlewares/pagination.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyIdExists } from "../middlewares/verifyIdExists.middleware";
import { verifyNameExists } from "../middlewares/verifyNameExists.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schema/movies.schema";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  validateBody(movieCreateSchema),
  verifyNameExists,
  createMovieController
);
movieRouter.get("", pagination, readMovieController);

movieRouter.use("/:id", verifyIdExists);

movieRouter.patch(
  "/:id",
  validateBody(movieUpdateSchema),
  verifyNameExists,
  updateMovieController
);
movieRouter.delete("/:id", deleteMovieController);
