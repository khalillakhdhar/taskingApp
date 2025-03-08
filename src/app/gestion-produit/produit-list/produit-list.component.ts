import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {
  MatDialog,
} from '@angular/material/dialog';
import { ProduitFormComponent } from '../produit-form/produit-form.component';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-produit-list',
  standalone: false,
  templateUrl: './produit-list.component.html',
  styleUrl: './produit-list.component.scss'
})
export class ProduitListComponent implements OnInit {
  dataSource!: Produit[]
  displayedColumns: string[] = ['id', 'titre', 'description', 'quantite', 'categorie', 'actions'];

  constructor(private readonly produitService: ProduitService,
    private route: Router, private dialog: MatDialog,private cdRef: ChangeDetectorRef ,private _snackBar: MatSnackBar  ) { }


  ngOnInit(): void {
    this.getProduits();
  }


  onDeleteActionClick(produit_id: number): void {
    const dialogRefConfir = this.dialog.open(ConfirmationDialogComponentComponent, { width: '250px' })
    dialogRefConfir.afterClosed().subscribe(data => {
      if (data) {
        this.produitService.deleteProduit(produit_id).subscribe(() => {
          this.getProduits()
          this._snackBar.open('Le produit a été supprimé avec succès!','Fermer',{
            horizontalPosition:'right',
            verticalPosition:'top' ,
            duration: 2000
          });
          this.cdRef.detectChanges();
        })
      }
    })
  }

  getProduits(): void {
    this.produitService.getProduit().subscribe(data => {
      this.dataSource = data;
    });
  }


  Ajouter() {
    this.route.navigate(['Produit/addProduit'])

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProduitFormComponent, {
      height: '500px',
      width: '400px',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getProduits();
      this.cdRef.detectChanges()
    })

  }
}