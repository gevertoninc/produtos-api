import { ProdutoEntity } from './produto.entity';
import { ProdutoParam } from './produto.param';

export class ProdutoRepository {
  produtos: ProdutoEntity[] = [
    { id: 'dc5f7732-b9e7-4758-a6b1-d0c42efb5118', nome: 'Um' },
    { id: 'a31bb38b-2721-4ba5-8567-77f4b2004b84', nome: 'Dois' },
  ];

  obterTodos(): ProdutoEntity[] {
    return this.produtos;
  }

  obterUm(id: string): ProdutoEntity {
    return this.produtos.find((produto: ProdutoEntity) => produto.id === id);
  }

  criar(produtoParam: ProdutoParam): ProdutoEntity {
    const produtoEntity: ProdutoEntity = new ProdutoEntity(
      produtoParam.id,
      produtoParam.nome,
    );

    this.produtos.push(produtoEntity);

    return produtoParam;
  }

  alterar(id: string, novoProduto: ProdutoParam): ProdutoEntity {
    this.produtos.forEach((produto: ProdutoEntity) => {
      if (produto.id === id) {
        produto = novoProduto;
      }
    });

    return novoProduto;
  }

  remover(id: string): void {
    this.produtos.filter((produto: ProdutoEntity) => produto.id !== id);
  }
}
