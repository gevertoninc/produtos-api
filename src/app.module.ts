import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutoRepository } from './produtos/produtos.repository';
import { ProdutoService } from './produtos/produtos.service';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutoService, ProdutoRepository],
})
export class AppModule {}
