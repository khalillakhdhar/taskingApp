import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  baseUrl = 'https://67cb841e3395520e6af58bf3.mockapi.io/produit'

  constructor(private readonly http: HttpClient) { }

  getProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl)
  }

  saveProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.baseUrl, produit)
  }
  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
