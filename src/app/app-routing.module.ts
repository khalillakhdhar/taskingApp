import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';

const routes: Routes = [
  {path:'', redirectTo:'Produit',pathMatch:'full'},
  {path:'add',component:TaskFormComponent},
  {path:'edit/:id',component:TaskFormComponent},
  { path: 'Produit', loadChildren: () => import('./gestion-produit/gestion-produit.module').then(m => m.GestionProduitModule) },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
