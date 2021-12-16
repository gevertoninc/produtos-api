import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { ProdutoService } from './produtos.service';

describe('AppController', () => {
  let appController: ProdutosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosController],
      providers: [ProdutoService],
    }).compile();

    appController = app.get<ProdutosController>(ProdutosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
