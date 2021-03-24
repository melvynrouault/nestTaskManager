import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto) {
    const tempTask:Task = {
      id: uuid(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(tempTask);
    return "done";
  }


  getOneTask(id: string): Task {
    return this.tasks.find((task : Task) => task.id === id)
  }

  deleteOneTask(id: string): Task [] {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks;
  }

  updateOneTask(updateStatusDto: UpdateStatusDto): Task  {
    const task = this.getOneTask(updateStatusDto.id)
    task.status = updateStatusDto.status;
    return task;
  }
}
