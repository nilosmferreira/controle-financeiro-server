import { BaseEntity } from './base.entity';

interface FunctionalityProsps {
  code: string;
  name: string;
  description: string;
}
export class Functionality extends BaseEntity<FunctionalityProsps> {
  get code() {
    return this.data.code;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }
}
