import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
// imports estilos de primeng
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ChatButtonComponent } from './componentes/chat-button/chat-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    ProductosComponent,
    ChatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
