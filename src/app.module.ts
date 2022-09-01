import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot
      ('mongodb+srv://engmario97:tIKCI6BXgb39KYBG@cluster0.zmtx0z9.mongodb.net/to-do?retryWrites=true&w=majority'),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
