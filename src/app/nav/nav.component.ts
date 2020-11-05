import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(private router: Router) {

   }

  ngOnInit(): void {
    const url = this.router.url;

    const pagina = url.split('/')[1];

    if (pagina !== ''){
      this.paginaAtual(pagina);

    }

  }

  paginaAtual(pagina: string): void {
    const aPaginaAtual = document.querySelector(`#${pagina}A`);

    aPaginaAtual.className += ' active';
    aPaginaAtual.innerHTML += '  <span class="sr-only">(current)</span>';
  }

}
