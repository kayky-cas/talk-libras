import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpeechToTextService } from '../speech-to-text.service';

@Component({
  selector: 'app-tradutor-page',
  templateUrl: './tradutor-page.component.html',
  styleUrls: ['./tradutor-page.component.css']
})
export class TradutorPageComponent implements OnInit {

  @ViewChild('textareaLibras') textareaLibras: ElementRef;

  mostrando = true;

  fileToUpload: FormData;

  frase;


  constructor(private http: HttpClient, public service: SpeechToTextService) {

    this.service.init();
  }

  ngOnInit(): void {

  }

  showHide(): void {

    this.mostrando = !this.mostrando;
  }

  startService(): void {
    this.service.start();
  }

  stopService(): void {
    this.service.stop();
  }

  inputFileChange(event): void {


    if (event.srcElement.files && event.srcElement.files[0]) {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append('audio', file, file.name);

      this.fileToUpload = formData;

      let corte = file.name.length - 15;

      if (corte < 0) {
        corte = 0;
      }

      document.querySelector('#labelAudio').innerHTML = file.name.slice(0, -corte) + '...';

    }

  }
  editar(): void {
    const botao = document.querySelector('#btnEditSave');
    if (botao.innerHTML === 'Editar') {
      botao.innerHTML = 'Salvar';
      (document.querySelector('.text-libras') as HTMLElement).style.display = 'none';
      this.textareaLibras.nativeElement.style.display = 'block';
    }
    else {
      botao.innerHTML = 'Editar';
      (document.querySelector('.text-libras') as HTMLElement).style.display = 'block';
      this.textareaLibras.nativeElement.style.display = 'none';
      let frase = this.textareaLibras.nativeElement.value;
      document.querySelector('.text-libras').innerHTML = frase;
    }
  }

  enviar(): void {
    if (document.querySelector('#labelAudio').innerHTML !== 'Escolha o áudio...') {
      this.http.post<any>('http://localhost:8888/audio', this.fileToUpload)
        .subscribe((response) => {
          this.frase = response;
        });
    }
  }


}
