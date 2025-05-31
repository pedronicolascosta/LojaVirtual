import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { firstValueFrom } from 'rxjs'; 

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  @Output() fechar = new EventEmitter<void>();
  @Output() adicionar = new EventEmitter<any>();

  produto = {
    titulo: '',
    descricao: '',
    preco: '',
    imagem: ''
  };

  constructor(private http: HttpClient) {}

  fecharModal() {
    this.fechar.emit();
  }

  async salvarProduto() {
    try {
      
      const precoLimpo = this.produto.preco
        .replace('R$', '') 
        .replace('.', '')  
        .replace(',', '.') 
        .trim();

      const produtoParaEnviar = {
        titulo: this.produto.titulo,
        descricao: this.produto.descricao,
        preco: parseFloat(precoLimpo),
        imagem: this.produto.imagem
      };

      const response = await firstValueFrom(
        this.http.post('http://127.0.0.1:5000/api/produtos/create', produtoParaEnviar)
      );

      console.log('Produto criado com sucesso:', response);

      this.adicionar.emit(produtoParaEnviar);
      this.fecharModal();
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  }

  formatarPreco() {
    if (!this.produto.preco) {
      return;
    }
  
    let valorNumerico = this.produto.preco.replace(/\D/g, '');
  
    while (valorNumerico.length < 3) {
      valorNumerico = '0' + valorNumerico;
    }
  
    const reais = valorNumerico.slice(0, -2);
    const centavos = valorNumerico.slice(-2);
  
    const reaisFormatado = parseInt(reais, 10).toString();
  
    this.produto.preco = `R$ ${reaisFormatado || '0'},${centavos}`;
  }  
}