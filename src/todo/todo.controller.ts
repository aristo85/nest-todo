import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { CreateTodoDto, TodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Post()
  async addTodo(@Body() body: CreateTodoDto): Promise<Todo> {
    return await this.todoService.create(body);
  }

  @Patch(':id')
  async updateTodo(@Param('id') id: string, @Body() body: TodoDto): Promise<Todo> {
    return await this.todoService.update(body, id);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<string> {
    return await this.todoService.delete(id);
  }
}
