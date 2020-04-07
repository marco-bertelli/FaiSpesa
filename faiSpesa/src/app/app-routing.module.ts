import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EditRouteGuard } from './services/guard/edit-route-guard.service';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { FunzionalitaComponent } from './funzionalita/funzionalita.component';
import { MyRouteGuardService } from './services/guard/my-route-guard.service';


const routes: Routes = [
    { path: 'login', component: LoginComponent,canActivate: [EditRouteGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'funzionalita', component: FunzionalitaComponent, canActivate: [MyRouteGuardService]},
   // { path: 'game-detail/:id', component: GameDetailComponent, canActivate: [MyRouteGuardService]},
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
