import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  constructor() {}
  sum(arg1: number, arg2?: number): number | undefined {
    if (!arg2) {
      return undefined;
    }
    return arg1 + arg2;
  }
  addBar(str: string): string {
      return `${str}bar`;
  }
}
