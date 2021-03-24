import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  CreateTask(createTaskDto: CreateTaskDto) {
    const tempTask:Task = {
      id: uuid(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(tempTask);
    return "done";
  }
}
