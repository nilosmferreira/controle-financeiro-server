import { Transaction } from '../entities/transaction';

export abstract class TransactionsRepository {
  abstract create(data: Transaction): Promise<void>;
  abstract update(data: Transaction): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findMany(params?: {
    take?: number;
    limit: number;
  }): Promise<Transaction[]>;
  abstract findById(id: string): Promise<Transaction>;
}
