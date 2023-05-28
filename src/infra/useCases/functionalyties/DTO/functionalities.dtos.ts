import { z } from 'zod';

export const createFunctionalitySchema = z.object({
  code: z.string(),
  name: z.string(),
  description: z.string(),
});
export type createFunctionalityDTO = z.infer<typeof createFunctionalitySchema>;
