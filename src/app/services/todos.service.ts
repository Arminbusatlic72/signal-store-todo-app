import { Injectable } from '@angular/core';
import { TODO } from '../model/mock.data';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async getTodos() {
    await sleep(1000);
    return TODO;
  }
}
async function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
