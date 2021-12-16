import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';
import { ProdutoParam } from './produto.param';
import { ProdutoRepository } from './produtos.repository';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  obterTodos(): ProdutoEntity[] {
    return this.produtoRepository.obterTodos();
  }

  obterUm(id: string): ProdutoEntity {
    return this.produtoRepository.obterUm(id);
  }

  criar(produtoParam: ProdutoParam): ProdutoEntity {
    return this.produtoRepository.criar(produtoParam);
  }

  alterar(id: string, novoProduto: ProdutoParam): ProdutoEntity {
    return this.produtoRepository.alterar(id, novoProduto);
  }

  remover(id: string): void {
    this.produtoRepository.remover(id);
  }
}
