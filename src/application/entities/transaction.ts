import { BaseEntity } from './base.entity';

interface TransactionProps {
  date: Date;
  value: number;
  type: 'Entrada' | 'Saída';
  status: 'Pendente' | 'Recebida' | 'Paga' | 'Cancelar';
  dischargeDate?: Date;
  accountId: string;
}
export class Transaction extends BaseEntity<TransactionProps> {
  get date() {
    return this.data.date;
  }
  get value() {
    return this.data.value;
  }
  get type() {
    return this.data.type;
  }
  get status() {
    return this.data.status;
  }
  get dischargeDate() {
    return this.data.dischargeDate;
  }
  get accountId() {
    return this.data.accountId;
  }
}
