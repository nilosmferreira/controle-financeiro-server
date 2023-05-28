import { FunctionalitiesRepository } from '@app/repositories';
import { createFunctionalityDTO } from './DTO/functionalities.dtos';
import { Functionality } from '@app/entities';
import { ErrorFactory } from '@infra/shared/errors';

export class CreateFunctionalityService {
  constructor(private readonly repository: FunctionalitiesRepository) {}
  async execute({ code, description, name }: createFunctionalityDTO) {
    const functionalityAlreadExists = await this.repository.findByCode(code);

    if (functionalityAlreadExists !== undefined) {
      throw ErrorFactory.createAlreadyExists('Functionality');
    }

    const functionality = new Functionality(
      {
        code,
        description,
        name,
      },
      code,
    );

    await this.repository.create(functionality);
    return functionality;
  }
}
