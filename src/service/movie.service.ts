import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  TMovieCreate,
  TMovieRepo,
  TMovieUpdate,
} from "../interfaces/movies.interfaces";
import {
  IPaginationParams,
  IPagination,
} from "../interfaces/pagination.interface";
import { movieSchema } from "../schema/movies.schema";

export const createMovieService = async (
  movieData: TMovieCreate
): Promise<Movie> => {
  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const newMovies: Movie = repo.create(movieData);
  await repo.save(newMovies);

  return movieSchema.parse(newMovies);
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
