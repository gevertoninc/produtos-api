import {
  All,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { IdProduto } from './id-produto';
import { ProdutoEntity } from './produto.entity';
import { ProdutoParam } from './dto/produto.param';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtoService: ProdutosService) {}

  @Get()
  obterTodos(): ProdutoEntity[] {
    return this.produtoService.obterTodos();
  }

  @Get('redirect')
  @Redirect('https://google.com', 300)
  redirect(): { url?: string; statusCode?: number } | void {
    return {
      url: '/produtos',
      statusCode: 399,
    };
  }

  @Get(':id')
  obterUm(@Param() param: IdProduto): ProdutoEntity {
    return this.produtoService.obterUm(param.id);
  }

  @Post()
  criar(@Body() body: ProdutoParam): ProdutoEntity {
    return this.produtoService.criar(body);
  }

  @Put(':id')
  alterar(
    @Param() param: IdProduto,
    @Body() body: ProdutoParam,
  ): ProdutoEntity {
    return this.produtoService.alterar(param.id, body);
  }

  @Delete(':id')
  remover(@Param() param: IdProduto): void {
    return this.produtoService.remover(param.id);
  }

  @All()
  all(@Param() param: ProdutoParam): string {
    return param.nome || 'Potato';
  }
}
