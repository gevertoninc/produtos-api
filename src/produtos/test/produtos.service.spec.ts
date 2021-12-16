import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoEntity } from '../produto.entity';
import { ProdutoRepository } from '../produtos.repository';
import { ProdutosService } from '../produtos.service';

describe('ProdutosService', () => {
  let produtosService: ProdutosService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ProdutosService, ProdutoRepository],
    }).compile();

    produtosService = app.get<ProdutosService>(ProdutosService);
  });

  describe('obterTodos', () => {
    it('Should get a list of products', () => {
      const todos: ProdutoEntity[] = produtosService.obterTodos();

      const expected: ProdutoEntity[] = [
        { id: 'dc5f7732-b9e7-4758-a6b1-d0c42efb5118', nome: 'Um', rating: 1 },
        { id: 'a31bb38b-2721-4ba5-8567-77f4b2004b84', nome: 'Dois', rating: 2 },
      ];

      expect<ProdutoEntity[]>(todos).toStrictEqual<ProdutoEntity[]>(expected);
    });
  });
});
