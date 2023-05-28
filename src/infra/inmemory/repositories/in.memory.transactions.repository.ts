import { Transaction } from '@app/entities';
import { TransactionsRepository } from '@app/repositories';

export class InMemoryTransactionsRepository implements TransactionsRepository {
  async create(data: Transaction): Promise<void> {
    this.data.push(data);
  }
  async update(data: Transaction): Promise<void> {
    const itemAlreadyExistsIndex = this.data.findIndex((item) => data.id);
    if (itemAlreadyExistsIndex === -1) {
      throw new Error('Not found');
    }
    this.data[itemAlreadyExistsIndex] = data;
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findMany(params?: {
    take?: number;
    limit: number;
  }): Promise<Transaction[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<Transaction> {
    throw new Error('Method not implemented.');
  }
  private data: Transaction[] = [];
}
