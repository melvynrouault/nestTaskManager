import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  CreateTask(title: string, description : string) {
    const tempTask:Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(tempTask);
    return "done";
  }
}
