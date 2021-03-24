import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Query, Param, Body, Controller, Get, Post } from '@nestjs/common';
import { threadId } from 'node:worker_threads';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
  constructor(private taskService : TasksService) {}

  @Get('getAllTasks')
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post('createTask')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get(':id')
  getOneTask(@Param('id') id: string): Task {
    return this.taskService.getOneTask(id);
  }

  @Delete(':id')
  deleteOneTask(@Param('id') id: string): Task [] {
    return this.taskService.deleteOneTask(id);
  }

  @Patch(':id')
  updateOneTask(@Body()updateSTatusDto: UpdateStatusDto): Task[] {
    return this.taskService.updateOneTask(updateSTatusDto);
  }
}
