import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { TaskStatus } from "src/taskStatus.enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Task } from "./task.entity";
import { TasksService } from "./tasks.service";


@Controller('tasks')
export class TasksController{
  constructor(private taskService : TasksService) {}
  
  @Get('/:id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  
//   @Get('getAllTasks')
//   getAllTasks(): Task[] {
//     return this.taskService.getAllTasks();
//   }

  @Post('/createTask')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  // @Delete('/:id')
  // async deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
  //   return this.taskService.deleteTaskById(id);
  // }


  @Patch('/updateTask/:id')
  updateOneTask(@Param('id', ParseIntPipe) id: number, @Body() taskStatus: UpdateStatusDto) {
    return this.taskService.updateOneTask(id, taskStatus);
  }
//   @Patch(':id')
//   updateOneTask(@Body()updateSTatusDto: UpdateStatusDto): Task {
//     return this.taskService.updateOneTask(updateSTatusDto);
//   }
}