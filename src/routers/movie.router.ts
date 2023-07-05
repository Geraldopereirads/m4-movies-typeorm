import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  readMovieController,
  updateMovieController,
} from "../controllers/movie.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schema/movies.schema";
import { verifyIdExists } from "../middlewares/verifyIdExists.middleware";
import { pagination } from "../middlewares/pagination.middleware";
import { verifyNameExists } from "../middlewares/verifyNameExists.middleware";

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
