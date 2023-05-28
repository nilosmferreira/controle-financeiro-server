export class ErrorFactory {
  static createAlreadyExists(entity: string) {
    const error = new Error(`${entity} already exists!`);
    error.name = 'Already.Exists';
    return error;
  }
}
