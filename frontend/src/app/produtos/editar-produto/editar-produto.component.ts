import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {
  @Input() produto: any;
  @Output() fechar = new EventEmitter<void>();
  @Output() editar = new EventEmitter<any>();

  constructor(private produtoService: ProdutoService) {}

  fecharModal() {
    this.fechar.emit();
  }

  editarProduto() {
    try {
      // Formata o preço para envio ao backend
      const precoLimpo = this.produto.preco
        .replace('R$', '')
        .replace(/\./g, '')
        .replace(',', '.')
        .trim();

      const produtoParaEnviar = {
        ...this.produto,
        preco: parseFloat(precoLimpo)
      };

      this.produtoService.atualizarProduto(produtoParaEnviar).subscribe({
        next: (res: any) => {
          console.log('Produto atualizado:', res);

          this.editar.emit(produtoParaEnviar);
          this.fecharModal();
        },
        error: (err: any) => {
          console.error('Erro ao atualizar produto:', err);
          alert('Erro ao atualizar produto!');
        }
      });
    } catch (error) {
      console.error('Erro ao formatar/preparar produto:', error);
      alert('Erro ao preparar os dados do produto!');
    }
  }

  formatarPreco() {
    if (!this.produto.preco) return;

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