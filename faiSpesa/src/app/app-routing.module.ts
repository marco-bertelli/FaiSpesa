import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    //{ path: 'game-list', component: GameListComponent, canActivate: [MyRouteGuardService]},
   // { path: 'game-detail/:id', component: GameDetailComponent, canActivate: [MyRouteGuardService]},
   // { path: 'modifica', component:ModificaComponent, canActivate: [EditRouteGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
