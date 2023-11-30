import { z } from "zod";

export const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  duration: z.number().positive().int(),
  price: z.number().positive().int(),
  description: z.string().nullish(),
});

export const movieCreateSchema = movieSchema.omit({ id: true });

export const moviesSchemaResponse = z.array(movieSchema);

export const movieUpdateSchema = movieCreateSchema.partial();
