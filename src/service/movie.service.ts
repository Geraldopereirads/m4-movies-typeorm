import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import {
  TMovieCreate,
  TMovieRepo,
  TMovieUpdate,
} from "../interfaces/movies.interfaces";
import {
  IPagination,
  IPaginationParams,
} from "../interfaces/pagination.interface";

export const createMovieService = async (
  movieData: TMovieCreate
): Promise<Movie> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movies: Movie = await repo.save(movieData);
  await repo.save(movies);
  return movies;
};

export const readMovieService = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: IPaginationParams): Promise<IPagination> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const [movie, count]: [Movie[], number] = await repo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movie,
  };
};

export const updateMovieService = async (
  movie: Movie,
  movieData: TMovieUpdate
): Promise<Movie> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);

  return await repo.save({ ...movie, ...movieData });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);

  await repo.remove(movie!);
};
