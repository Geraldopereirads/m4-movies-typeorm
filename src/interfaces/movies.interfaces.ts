import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import { movieCreateSchema, movieSchema } from "../schema/movies.schema";

export type TMovieRepo = Repository<Movie>;
export type TMovieRead = Array<Movie>;
export type TMovieCreate = z.infer<typeof movieCreateSchema>;
export type TMovie = z.infer<typeof movieSchema>;

export type TMovieUpdate = DeepPartial<TMovieCreate>;

// export type TMoviesPagination = {
//   prevPage: string | null;
//   nextPage: string | null;
//   count: number;
//   data: TMovieResponse;
// };
