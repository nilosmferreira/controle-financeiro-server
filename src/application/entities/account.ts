import { BaseEntity } from './base.entity';

interface AccountProps {
  name: string;
  currentBalance: number;
  userId: string;
}

export class Account extends BaseEntity<AccountProps> {
  get name() {
    return this.data.name;
  }
  get currentBalance() {
    return this.data.currentBalance;
  }
  get userId() {
    return this.data.userId;
  }
}
