import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './shared/task';
import { TasksService } from './shared/tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {

    }

    @Get()
    async getAll(): Promise<Task[]> {
        return this.taskService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Task | void> {
        return this.taskService.getById(id);
    }

    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Task): Promise<Task | void> {
        return this.taskService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.taskService.delete(id);
    }
}
