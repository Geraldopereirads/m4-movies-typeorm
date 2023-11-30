import { Response, Request } from "express";
import { Movie } from "../entities";
import {
  createMovieService,
  deleteMovieService,
  readMovieService,
  updateMovieService,
} from "../service/movie.service";
import { IPagination } from "../interfaces/pagination.interface";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: Movie = req.body;
  const movieData: Movie = await createMovieService(payload);

  return res.status(201).json(movieData);
};

export const readMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pagination: IPagination = await readMovieService(res.locals.pagination);
  return res.status(200).json(pagination);
};

export const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { movieId } = res.locals;
  const movieData: Movie = req.body;
  const movies: Movie = await updateMovieService(movieId, movieData);
  return res.status(200).json(movies);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { movieId } = res.locals;

  await deleteMovieService(movieId);
  return res.status(204).send();
};
