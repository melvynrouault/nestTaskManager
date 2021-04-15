import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Task } from "./task.entity";
import { TaskStatus } from "./tasks.model";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description, priority } = createTaskDto;

        const task = new Task();
        task.title = title;
        task.description = description;
        task.priority = priority;
        task.status = TaskStatus.OPEN;

        await task.save();
        return task;
    }

    // async updateOneTask(task: CreateTaskDto, updateStatusDto: UpdateStatusDto): Promise<Task> {
    //     const { status } = updateStatusDto;

    //     task.status = TaskStatus.DONE;

    //     await task.save();
    //     return task;
    // }
}