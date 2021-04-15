import { TaskStatus } from "src/taskStatus.enum";

export class UpdateStatusDto {
    id: string;
    status: TaskStatus;
  }