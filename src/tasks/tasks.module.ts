import { Module } from '@nestjs/common';
import { TasksService } from './shared/tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
    ],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule { }
