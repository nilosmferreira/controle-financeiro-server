import { Account } from '../entities/account';

export abstract class AccountsRepository {
  abstract create(data: Account): Promise<void>;
  abstract update(data: Account): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findMany(params: {
    userId: string;
    take?: number;
    limit: number;
  }): Promise<Account[]>;
  abstract findById(id: string): Promise<Account>;
  abstract toggleStatus(
    id: string,
    status: 'Recebido' | 'Saída' | 'Cancelada',
  ): Promise<Account>;
}
