import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeormconfig';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
