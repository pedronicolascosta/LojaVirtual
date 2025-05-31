import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = [];  
  mostrarModal = false;
  mostrarModalEditar = false;
  mostrarModalExcluir = false;
  produtoParaExcluir: any = null;
  produtoSelecionado: any = null;

  modalSucesso = false;
  modalEditarSucesso = false;
  modalExcluirSucesso = false; 
  produtoEditado: any = null;  
  produtoAdicionado: any = null;  

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
        console.log(this.produtos);
      },
      (error) => {
        console.error('Erro ao carregar os produtos', error);
      }
    );
  }

  adicionarProduto() {
    console.log('Adicionar novo produto');
    this.mostrarModal = true; 
  }

  editarProduto(produto: any) {
    console.log('Editar produto:', produto);
    this.produtoSelecionado = produto;
    this.mostrarModalEditar = true;
    this.carregarProdutos();
  }

  fecharModalEditar() {
    this.mostrarModalEditar = false;
  }

  excluirProduto(produto: any) {
    this.produtoParaExcluir = produto;
    this.mostrarModalExcluir = true;
  }

  confirmarExclusao() {
    if (this.produtoParaExcluir && this.produtoParaExcluir._id) {
      this.produtoService.excluirProduto(this.produtoParaExcluir._id).subscribe({
        next: (res) => {
          console.log('Sucesso:', res);
          this.produtos = this.produtos.filter(p => p._id !== this.produtoParaExcluir._id);
          this.mostrarModalExcluir = false;
          this.modalExcluirSucesso = true;
  
         
          setTimeout(() => {
            this.modalExcluirSucesso = false;
            this.produtoParaExcluir = null;  
          }, 2000);
        },
        error: (err) => {
          console.error('Erro ao excluir:', err);
          alert('Erro ao excluir produto');
          this.mostrarModalExcluir = false;
          this.produtoParaExcluir = null;
        }
      });
    }
  }  
  

  cancelarExclusao() {
    this.mostrarModalExcluir = false;
    this.produtoParaExcluir = null;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  adicionarProdutoLista(produto: any) {
    this.produtos.push(produto);

    this.produtoAdicionado = produto;
    this.modalSucesso = true;

    setTimeout(() => {
      this.modalSucesso = false;
      this.produtoAdicionado = null;
    }, 3000);
  }

  produtoEditadoSucesso(produto: any) {
    this.produtoEditado = produto;
    this.modalEditarSucesso = true;

    setTimeout(() => {
      this.modalEditarSucesso = false;
      this.produtoEditado = null;
    }, 3000);
  }
}