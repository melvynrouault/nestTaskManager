import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';


@Controller('/tasks')
export class TasksController {
  constructor(private taskService : TasksService) {}

  @Get('/getAllTasks')
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post('/createTask')
  createTask(
    @Body("title") title: string,
    @Body("description") description: string) {
    return this.taskService.CreateTask(title, description);
  }
}
