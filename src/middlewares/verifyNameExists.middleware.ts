import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/App.error";
import { TMovieRepo } from "../interfaces/movies.interfaces";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const name: string | undefined = req.body.name;

  if (!name) return next();

  const movieExists: boolean = await repo.exist({ where: { name } });

  if (movieExists) throw new AppError("Movie already exists.", 409);
  return next();
};
