import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textoFinal: string = '';   
  palavraAtual: string = 'Qualidade';  
  indice: number = 0;    
  intervalo: any;        

  ngOnInit() {
    this.iniciarEfeitoDeDigitação();
  }

  alternarValor() {
    if (this.palavraAtual === 'Qualidade') {
      this.palavraAtual = 'Leite Fresco';
    } else if (this.palavraAtual === 'Leite Fresco') {
      this.palavraAtual = 'Origem Familiar';
    } else {
      this.palavraAtual = 'Qualidade';
    }

    this.textoFinal = '';    
    this.indice = 0;         
    this.iniciarEfeitoDeDigitação();
  }

  
  iniciarEfeitoDeDigitação() {
    this.intervalo = setInterval(() => {
      if (this.indice < this.palavraAtual.length) {
        this.textoFinal += this.palavraAtual.charAt(this.indice);
        this.indice++;
      } else {
        clearInterval(this.intervalo); 
        setTimeout(() => {
          this.alternarValor(); 
        }, 1500);  
      }
    }, 100);  
  }
}