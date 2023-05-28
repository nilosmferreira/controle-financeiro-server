import { z } from 'zod';

export const createUserSchema = z.object({
  nome: z.string(),
  usuario: z.string(),
  senha: z.string(),
  confirmaSenha: z.string(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
