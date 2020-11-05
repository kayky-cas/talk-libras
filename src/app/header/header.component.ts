import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-dark">
      <div>
        <h1 class="text-primary">TalkLibras</h1>
        <img src="../../assets/images/header-libras-logo.png">
      </div>

    </header>
    <app-nav></app-nav>
  `,
  styles: [
    'header { width: 100%; height: 200px; } img{ max-width: 50%; height: 50%; float: left } h1 { float: left; position: relative; top: 30px } div { width: 280px;height: 100%; position: relative; top: 40px; left: 10%; text-align:center}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
