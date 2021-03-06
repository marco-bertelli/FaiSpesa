import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { FunzionalitaComponent } from './funzionalita/funzionalita.component';
import { ListaComponent } from './lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrealistaComponent } from './crealista/crealista.component';
import { CondividiComponent } from './condividi/condividi.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LogoutComponent,
    RegistrazioneComponent,
    LoginComponent,
    FunzionalitaComponent,
    ListaComponent,
    FooterComponent,
    DettaglioComponent,
    CrealistaComponent,
    CondividiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
