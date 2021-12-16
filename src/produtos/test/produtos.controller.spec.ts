import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from '../produtos.controller';
import { ProdutoRepository } from '../produtos.repository';
import { ProdutosService } from '../produtos.service';

describe('ProdutosController', () => {
  let produtosController: ProdutosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosController],
      providers: [ProdutosService, ProdutoRepository],
    }).compile();

    produtosController = app.get<ProdutosController>(ProdutosController);
  });

  describe('A boolean value', () => {
    it('Should be true', () => {
      expect<boolean>(true).toBe<boolean>(true);
    });
  });
});
