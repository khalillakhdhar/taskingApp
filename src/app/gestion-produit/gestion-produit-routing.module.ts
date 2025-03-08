import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProduitComponent } from './gestion-produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';


const routes: Routes = [{ path: '', redirectTo: 'listProduit', pathMatch: 'full' },
{
  path: '', component: GestionProduitComponent,
  children: [
    { path: 'listProduit', component: ProduitListComponent },
    { path: 'addProduit', component: ProduitFormComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProduitRoutingModule { }
