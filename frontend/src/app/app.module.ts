import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component'; 
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AdicionarProdutoComponent } from './produtos/adicionar-produto/adicionar-produto.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,  
    HomeComponent,
    FooterComponent,
    AdicionarProdutoComponent,
    EditarProdutoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }