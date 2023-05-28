import { User } from '../entities/user';

export abstract class UsersRepository {
  abstract create(data: User): Promise<void>;
  abstract update(data: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findMany(params?: { take?: number; limit: number }): Promise<User[]>;
  abstract findById(id: string): Promise<User>;
}
