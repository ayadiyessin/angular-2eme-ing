import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Modeles/Evt';

@Injectable({
  providedIn: 'root'
})
export class EvtService {

  constructor(private httpClient:HttpClient) { }
  GetAll() : Observable<Evt[]> // bech yraja3li tableau d'article // type de retourn observeble
  {
    // envoyer une requete http vers json server (get)
    return this.httpClient.get<Evt[]>(`http://localhost:3000/Evt`);
  }
  OnSaveEvent(EventToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post('http://localhost:3000/Evt',EventToSave);

  }
  getArtcileById(id:string):Observable<Evt>
  {
    return this.httpClient.get<Evt>(`http://localhost:3000/Evt/${id}`);

  }

}
