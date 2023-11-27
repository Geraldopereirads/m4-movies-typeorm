import { z } from "zod";
import {
  movieCreateSchema,
  moviesSchemaResponse,
} from "../schema/movies.schema";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

export type TMovieRepo = Repository<Movie>;
export type TMovieRead = Array<Movie>;
export type TMovieCreate = z.infer<typeof movieCreateSchema>;
export type TMovieResponse = z.infer<typeof moviesSchemaResponse>;

export type TMovieUpdate = DeepPartial<TMovieCreate>;

export type TMoviesPagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TMovieResponse;
};
