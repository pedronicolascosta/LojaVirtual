import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private apiUrl = 'http://127.0.0.1:5000/api/produtos';  

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  atualizarProduto(produto: any): Observable<any> {
  const url = 'http://127.0.0.1:5000/api/produtos/update';
  const payload = {
    id: produto._id || produto.id,
    titulo: produto.titulo,
    descricao: produto.descricao,
    preco: produto.preco,
    imagem: produto.imagem
  };
  
  return this.http.post<any>(url, payload);
  }


excluirProduto(id: string): Observable<any> {
  const url = "http://localhost:5000/api/produtos/delete";

  console.log('Enviando ID para exclusão:', id);            
  console.log('Payload enviado:', { id });                 

  return this.http.post<any>(url, { id });  
}
}