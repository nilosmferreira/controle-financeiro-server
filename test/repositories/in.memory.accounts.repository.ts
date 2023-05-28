import { Account } from '@app/entities';
import { AccountsRepository } from '@app/repositories';

export class InMemoryAccountsRepository implements AccountsRepository {
  private data: Account[] = [];
  async create(data: Account): Promise<void> {
    this.data.push(data);
  }
  async update(data: Account): Promise<void> {
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
  async findMany(params: {
    userId: string;
    take?: number;
    limit: number;
  }): Promise<Account[]> {
    return this.data.filter((item) => item.userId === params.userId);
  }
  async findById(id: string): Promise<Account> {
    return this.data.find((item) => item.id === id);
  }
  async toggleStatus(
    id: string,
    status: 'Recebido' | 'Saída' | 'Cancelada',
  ): Promise<Account> {
    throw new Error('Method not implemented.');
  }
}
