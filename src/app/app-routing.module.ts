import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  {path:'', redirectTo: '/accueil', pathMatch: 'full'},
  {path:'accueil', component: AccueilComponent},
  {path:'qui-suis-je', component: AccueilComponent},
  {path:'mes-travaux', component: AccueilComponent},
  {path:'contact', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
