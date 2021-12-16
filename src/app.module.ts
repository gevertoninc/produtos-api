import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutoRepository } from './produtos/produtos.repository';
import { ProdutosService } from './produtos/produtos.service';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutosService, ProdutoRepository],
})
export class AppModule {}
