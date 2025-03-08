import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProduitRoutingModule } from './gestion-produit-routing.module';
import { GestionProduitComponent } from './gestion-produit.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    GestionProduitComponent,
    ProduitFormComponent,
    ProduitListComponent,
    ConfirmationDialogComponentComponent
  ],
  imports: [
    CommonModule,
    GestionProduitRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ]
})
export class GestionProduitModule { }
