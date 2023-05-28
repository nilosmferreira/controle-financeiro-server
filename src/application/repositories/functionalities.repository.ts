import { Functionality } from '../entities/functionality';

export abstract class FunctionalitiesRepository {
  abstract create(data: Functionality): Promise<void>;
  abstract update(data: Functionality): Promise<void>;
  abstract listMany(params: {
    take?: number;
    limit?: number;
  }): Promise<Functionality[]>;
  abstract findById(id: string): Promise<Functionality>;
}
