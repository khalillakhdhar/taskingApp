import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/categorie..model';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = 'https://67cb841e3395520e6af58bf3.mockapi.io/categorie'

  constructor(private readonly http: HttpClient) { }

  getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.baseUrl)
  }

}
