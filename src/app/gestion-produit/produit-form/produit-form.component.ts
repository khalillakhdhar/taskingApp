import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { Categorie } from '../models/categorie..model';
import { CategorieService } from '../services/categorie.service';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-produit-form',
  standalone: false,
  templateUrl: './produit-form.component.html',
  styleUrl: './produit-form.component.scss'
})

export class ProduitFormComponent implements OnInit {
  categorie!: Categorie[]
  constructor( private readonly categorieService: CategorieService, private readonly produitService : ProduitService ,private readonly router:Router,  
      public dialogRef: MatDialogRef<ProduitFormComponent>
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

 })
 this.dialogRef.close()
  }
}
