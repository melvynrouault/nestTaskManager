import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
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
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.CreateTask(createTaskDto);
  }
}
