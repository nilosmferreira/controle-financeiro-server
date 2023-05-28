import { Functionality } from '@app/entities';
import { FunctionalitiesRepository } from '@app/repositories';

export class InMemoryFunctionalitiesRepository
  implements FunctionalitiesRepository
{
  private data: Functionality[] = [];
  async create(data: Functionality): Promise<void> {
    this.data.push(data);
  }
  async update(data: Functionality): Promise<void> {
    const itemAlreadyExistsIndex = this.data.findIndex((item) => data.id);
    if (itemAlreadyExistsIndex === -1) {
      throw new Error('Not found');
    }
    this.data[itemAlreadyExistsIndex] = data;
  }
  async listMany(params: {
    take?: number;
    limit?: number;
  }): Promise<Functionality[]> {
    return this.data;
  }
  async findById(id: string): Promise<Functionality> {
    return this.data.find((item) => item.id === id);
  }
}
