//Modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { NotasComponent } from './Componentes/notas/notas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
