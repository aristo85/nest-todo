import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = []; // In-memory array

  getAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): number {
    return this.todos.findIndex((item) => item.id === id);
  }

  create(todo: CreateTodoDto) {
    const newTodo = { ...todo, id: uuidv4() };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(updatedTodo: Todo, id: string) {
    const foundTodoIndx = this.findOne(id);
    if (foundTodoIndx === -1) {
      throw new NotFoundException(`todo ${id} not found`);
    }
    this.todos = this.todos.map((todo) =>
      todo.id === id ? updatedTodo : todo,
    );
    return updatedTodo;
  }

  delete(id: string) {
    const foundTodoIndx = this.findOne(id);
    if (foundTodoIndx === -1) {
      throw new NotFoundException(`todo ${id} not found`);
    }
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return id;
  }
}
