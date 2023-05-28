import { InMemoryFunctionalitiesRepository } from '@infra/inmemory/repositories/in.memory.functionalities.repository';
import { CreateFunctionalityService } from './create.functionality.service';

describe('Functionality', () => {
  let sut: CreateFunctionalityService;
  beforeEach(async () => {
    const repository = new InMemoryFunctionalitiesRepository();
    sut = new CreateFunctionalityService(repository);
    await sut.execute({
      code: 'teste',
      name: 'teste',
      description: 'Teste de criação',
    });
  });

  test('Should able create an Functionality', () => {
    expect(
      sut.execute({
        code: 'teste.1',
        name: 'teste',
        description: 'Teste de criação',
      }),
    ).resolves.toHaveProperty('id');
  });
  test('Should not able create an Functionality with same code', () => {
    expect(
      sut.execute({
        code: 'teste',
        name: 'teste',
        description: 'Teste de criação',
      }),
    ).rejects.toThrow('Functionality already exists');
  });
});
