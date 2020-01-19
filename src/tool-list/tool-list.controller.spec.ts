import { Test, TestingModule } from '@nestjs/testing';
import { ToolListController } from './tool-list.controller';

describe('ToolList Controller', () => {
  let controller: ToolListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolListController],
    }).compile();

    controller = module.get<ToolListController>(ToolListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
