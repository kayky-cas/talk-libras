import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradutorPageComponent } from './tradutor-page/tradutor-page.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VlibrasComponent } from './vlibras/vlibras.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    AppComponent,
    TradutorPageComponent,
    HeaderComponent,
    NavComponent,
    ErrorPageComponent,
    VlibrasComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
