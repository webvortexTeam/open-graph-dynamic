export class InvalidPropriety extends Error {
  constructor(param: string) {
    super(`Propriety: ${param} is not valid`);
    this.name = `InvalidPropriety`;
  }
}
