import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EditRouteGuard } from './services/guard/edit-route-guard.service';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { FunzionalitaComponent } from './funzionalita/funzionalita.component';
import { MyRouteGuardService } from './services/guard/my-route-guard.service';
import { ListaComponent } from './lista/lista.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { CrealistaComponent } from './crealista/crealista.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent,canActivate: [EditRouteGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'funzionalita', component: FunzionalitaComponent, canActivate: [MyRouteGuardService]},
    { path: 'crealista', component: CrealistaComponent, canActivate: [MyRouteGuardService]},
    { path: 'lista', component: ListaComponent, canActivate: [MyRouteGuardService]},
    { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [MyRouteGuardService]},
    { path: 'registrati', component:RegistrazioneComponent, canActivate: [EditRouteGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
