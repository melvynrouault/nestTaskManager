// import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateStatusDto } from './dto/update-status.dto';
// import { Task, TaskStatus } from './tasks.model';

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { TaskRepository } from "./task.repository";
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from 'src/taskStatus.enum';
import { UpdateStatusDto } from './dto/update-status.dto';

// @Injectable()
// export class TasksService {
  
//   private tasks: Task[] = [];

//   getAllTasks(): Task[] {
//     return this.tasks;
//   }

//   createTask(createTaskDto: CreateTaskDto) {
//     const tempTask:Task = {
//       id: uuid(),
//       title: createTaskDto.title,
//       description: createTaskDto.description,
//       status: TaskStatus.OPEN
//     }
//     this.tasks.push(tempTask);
//     return "done";
//   }


//   getOneTask(id: string): Task {
//     return this.tasks.find((task : Task) => task.id === id)
//   }

//   deleteOneTask(id: string): Task [] {
//     this.tasks = this.tasks.filter(task => task.id !== id);
//     return this.tasks;
//   }

//   updateOneTask(updateStatusDto: UpdateStatusDto): Task  {
//     const task = this.getOneTask(updateStatusDto.id)
//     task.status = updateStatusDto.status;
//     return task;
//   }
// }

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto) {
    const insert = await this.taskRepository.createTask(createTaskDto)
    if(!insert) {
      throw new Error("Task not inserted");
    }

    return insert;
  }

  
  async deleteTaskById(id: number): Promise<void> {
    const deleted = await this.taskRepository.delete(id);
    if (deleted.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateOneTask(id: number, status: UpdateStatusDto) {
    const task = await this.getTaskById(id);
    console.log(task);
    console.log(status);
    if(!Object.values(TaskStatus).includes(status.status)){
      throw new NotFoundException(`values does not match`);
    }
    task.status = status.status;

    return task;
  }
  // async getAllTasks(): Promise<Task> {
  //   const found = await this.taskRepository.find();
  //   if (!found) {
  //     throw new NotFoundException(`Tasks not found`);
  //   }

  //   return found;
  // }
}