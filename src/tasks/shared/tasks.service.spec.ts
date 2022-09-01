import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TaskService', () => {
  let provider: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    provider = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
