import { BaseEntity } from './base.entity';

interface AccountProps {
  name: string;
  currentBalance: number;
  userId: string;
  deletedAt?: Date;
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
  get active() {
    return !!this.data.deletedAt;
  }
  toggleActive() {
    if (this.active) {
      this.data.deletedAt = new Date();
    } else {
      this.data.deletedAt = undefined;
    }
  }
}
