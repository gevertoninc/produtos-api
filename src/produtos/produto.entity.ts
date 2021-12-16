export class ProdutoEntity {
  id: string;
  nome?: string;
  rating?: number;
  created_at?: Date;

  constructor(id: string, nome?: string, rating?: number, created_at?: Date) {
    this.id = id;
    this.nome = nome;
    this.rating = rating;
    this.created_at = created_at;
  }
}
