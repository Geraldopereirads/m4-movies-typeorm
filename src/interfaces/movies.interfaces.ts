import { z } from "zod";
import { movieCreateSchema } from "../schema/movies.schema";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

export type TMovieRepo = Repository<Movie>;
export type TMovieRead = Array<Movie>;
export type TMovieCreate = z.infer<typeof movieCreateSchema>;
export type TMovieUpdate = DeepPartial<TMovieCreate>;
