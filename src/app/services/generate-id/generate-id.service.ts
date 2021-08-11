import { Injectable } from '@angular/core';

@Injectable()
export class GenerateIdService {
  constructor() {}

  public generateId(): number {
    return new Date().getTime();
  }

  public generateIdWithSeed(seed: number): number {
    return new Date().getTime() + ++seed;
  }
}
