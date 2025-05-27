import { Injectable } from '@angular/core';
import { TODO } from '../model/mock.data';
import { Todo } from '../model/todo.model';
import { patchState } from '@ngrx/signals';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async getTodos() {
    await sleep(1000);
    return TODO;
  }
  async addTodos(todo: Partial<Todo>): Promise<Todo> {
    await sleep(1000);
    return {
      id: Math.random().toString(36).substr(2, 9),
      ...todo,
    } as Todo;
  }
  async deleteTodo(id: string) {
    await sleep(500);
  }
}

// This method simulates the backend call
async function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
