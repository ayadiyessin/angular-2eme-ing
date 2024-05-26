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
  constructor( private httpClient :HttpClient){

  }
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
      ...memberToSave, // bech ijib les donner mta member
      id:Math.ceil(Math.random()*1000), // bech sna3na zama zama id
      createDate: new Date().toISOString(),
    }
    this.tab.push(member1);
    return new  Observable(observer=>observer.next())

  }
  OnDelate(id:string):Observable<any> // type de rotourn dima Observable
  {
    //*************hetha kif yebda fama back end  ****************************/
    //return this.httpClient.delete('127.0.01:8080/api/Member/$(id)');

    /*********************houni ken fi front *********** */
    this.tab=this.tab.filter(item=> item.id !== id);
    return new  Observable(observer=>observer.next()) // kif n7eb nraja3 haja nraja3ha fi next
  }

  getMemberById(id:string):Observable<Member>
  {
    // return this.httpClient.get('127.0.01:8080/api/Member/${id}');
    return new  Observable(observer=>observer.next(this.tab.filter(item=> item.id == id)[0] ?? null)) // si non  iraja3 ?? null
    //this.tab.filter(item=> item.id == id) hethi traja3 tableau
  }
  updateMember(idc: string , member : Member ) : Observable < any >
  {
    // ********* back
    // return this.httpClient.put('127.0.01:8080/api/Member/${id}',member); //member hethy eli bech nbedel biaa  (fastAPI)
    //fi friont
    const index = this.tab.findIndex(item=> item.id == idc); // traja3li indx mte3ou
    this.tab[index] ={

      ...member, // bech ijib les donner mta member hethy ttsama extraction
      id :idc,
      createDate: new Date().toISOString(),
    }
    return new  Observable(observer=>observer.next())
  }
  GetAll():Observable<Member[]>
  {
    //envoyer une requete http vers jason server (GET)
    return this.httpClient.get<Member[]>('http://localhost:3000/mumbers');
  }
}
