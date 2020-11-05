import { Component, OnInit } from '@angular/core';
import { VLibras } from '../../assets/js/vlibras.js';

@Component({
  selector: 'app-vlibras',
  template: `
      <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class VlibrasComponent implements OnInit {

  constructor() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');

   }

  ngOnInit(): void {
  }

}
