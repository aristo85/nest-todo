import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  readonly id: string;

  @IsNotEmpty()
  readonly todo: string;

  @IsNotEmpty()
  readonly completed: boolean;
}

export class CreateTodoDto {
  @IsNotEmpty()
  readonly todo: string;

  @IsNotEmpty()
  readonly completed: boolean;
}
