import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/App.error";
import { TMovieRepo } from "../interfaces/movies.interfaces";

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movieId: Movie | null = await repo.findOneBy({ id: id });

  if (!movieId) throw new AppError("Movie not found", 404);

  res.locals = { ...res, movieId };
  return next();
};
