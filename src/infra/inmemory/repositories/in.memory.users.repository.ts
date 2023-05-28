import { User } from '@app/entities';
import { UsersRepository } from '@app/repositories';

export class InMemoryUsersRepository implements UsersRepository {
  private data: User[] = [];

  async create(data: User): Promise<void> {
    this.data.push(data);
  }
  async update(data: User): Promise<void> {
    const itemAlreadyExistsIndex = this.data.findIndex((item) => data.id);
    if (itemAlreadyExistsIndex === -1) {
      throw new Error('Not found');
    }
    this.data[itemAlreadyExistsIndex] = data;
  }
  async delete(id: string): Promise<void> {
    const itemAlreadExists = await this.findById(id);
    if (!itemAlreadExists) {
      throw new Error('Not found');
    }
    itemAlreadExists.toggleActive();
  }
  async findMany(params?: { take?: number; limit: number }): Promise<User[]> {
    return this.data;
  }
  async findById(id: string): Promise<User> {
    return this.data.find((item) => item.id === id);
  }
}
