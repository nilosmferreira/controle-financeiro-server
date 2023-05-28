import { randomUUID } from 'node:crypto';

export abstract class BaseEntity<T> {
  protected data: T;
  protected _id: string;
  constructor(data: T, id?: string) {
    this.data = data;

    this._id = id ?? randomUUID();
  }
  get id() {
    return this._id;
  }
}
