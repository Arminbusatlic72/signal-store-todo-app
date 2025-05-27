import { Component, inject, OnInit } from '@angular/core';
import { TodosStore } from './store/todos.store';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  readonly store = inject(TodosStore);
  ngOnInit(): void {
    this.loadTodos().then(() =>
      console.log('todos Loaded', this.store.todos())
    );
  }
  async loadTodos() {
    await this.store.loadAll();
  }
}
