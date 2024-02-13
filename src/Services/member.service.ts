import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';
import { GLOBAL } from 'src/app/app-config';


@Injectable({ // docorateur
  providedIn: 'root' // j'ai le drois  de l'injecter partout dans mon application
}) // bech service accepte d'etre injecte dans le composent => bech nejem n3ayatlou fi les composent
// service houwa classe
export class MemberService {
  tab:Member[]=GLOBAL._DB.mumbers; // hethy ken froont
  constructor(
    private httpClient :HttpClient
  ) { }
  // creer une fonction OnSave qui gener le requette http
  OnSave(memberToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {
    // ******************* houni fi  back end ***********************/

    // generer la requette http en mode post vers back end
    //return this.httpClient.post('127.0.01:8080/api/Member',memberToSave);
    //httpClient instance mel classe HttpClient
    // thread pour le sanchronisation entre le front et  le back end





    // ------------------------------ statique
    const member1={
      ...memberToSave,
      id:Math.ceil(Math.random()*1000), // bech sna3na zama zama id
      createDate: new Date().toISOString(),
    }
    this.tab.push(member1);
    return new  Observable(observer=>observer.next())

  }
  OnDelate(id:string):Observable<any>
  {
    return this.httpClient.delete('127.0.01:8080/api/Member/{id}');

  }
}
