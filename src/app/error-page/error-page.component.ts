import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <app-header></app-header>
    <h1 class="text-danger">Página não encontrada!</h1>
  `,
  styles: [
  ]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
