import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { Categorie } from '../models/categorie..model';
import { CategorieService } from '../services/categorie.service';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produit-form',
  standalone: false,
  templateUrl: './produit-form.component.html',
  styleUrl: './produit-form.component.scss'
})

export class ProduitFormComponent implements OnInit {
  categorie!: Categorie[]
  constructor( private readonly categorieService: CategorieService,
     private readonly produitService : ProduitService ,private readonly router:Router,  
      private dialogRef: MatDialogRef<ProduitFormComponent>,
    private  _snackBar : MatSnackBar
    ){}
  ngOnInit(): void {
    this.categorieService.getCategorie().subscribe(data => {
      this.categorie=data
      })
  }



  produit={}as Produit

  save(){
 this.produitService.saveProduit(this.produit).subscribe(data=>{
   this.router.navigate(['Produit/listProduit'])
   this._snackBar.open('Le produit a été ajouté avec succès!','Fermer',{
    horizontalPosition:'right',
    verticalPosition:'top' ,
    duration: 2000
  });

 })
 this.dialogRef.close()
  }
}
