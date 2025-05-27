import { Component, inject, OnInit } from '@angular/core';
import { TodosStore } from './store/todos.store';
// import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TodosListComponent } from './todos-list/todos-list.component';
@Component({
  selector: 'app-root',
  imports: [TodosListComponent, MatProgressSpinnerModule],
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
