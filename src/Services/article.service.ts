import { Injectable } from '@angular/core';
import { Article } from 'src/Modeles/Article';
import { GLOBAL } from 'src/app/app-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  tabArticle:Article[]=[]; // fera8 3a lawel wn3abih bel get // hetha zeyed
  constructor(private httpClient:HttpClient) { }
  ONSAVE(articleToSave:any): Observable<any>
  {
    // generer la requete http en mode post vers back end
    // a3melneha commentaire 5ater ma 3andenech back end
    //return this.httpClient.post('127.0.0.1:8080/api/Member',memberToSave)

    const article1={
      id: Math.ceil(Math.random()*1000),
      ...articleToSave,
      //date:new Date().toISOString()
    }
    this.tabArticle.push(article1)

    //bech na3mel observable a la main 5ater na7ina return mte3 back end
    return new Observable(observer => observer.next())
  }
  ONUPDATE(idc:string,articleToUpdate:any):Observable<any>
  {
    //return this.httpClient.post('127.0.0.1:8080/api/Member/$(id)',memberToUpdate)
    const index=this.tabArticle.findIndex(item=>item.id ==idc)
    this.tabArticle[index]={id:idc,
      ...articleToUpdate,
      createdDate:new Date().toISOString()}
    return new Observable(observer => observer.next())
  }

  ONDELETE(id:string): Observable<any>
  {
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
    this.tabArticle=this.tabArticle.filter(item=>item.id !=id)
    return new Observable(observer => observer.next())
  }

  ONGETID(id:string):Observable<Article>
  {
    //return this.httpClient.get<Member>('127.0.0.1/api/Member/$(id)');

    let ele:Article =this.tabArticle.filter(item =>item.id ==id)[0] ?? null  // ?? kif ta3mel hethoum zouz yetsamew sinon ma3neha ken l9ah yraj3o sinon yraja3 null
    return new Observable(observer =>observer.next(ele))
  }

  // houni bech nwali na9raaa mel json-service
  GetAll() : Observable<Article[]> // bech yraja3li tableau d'article // type de retourn observeble
  {
    // envoyer une requete http vers json server (get)
    return this.httpClient.get<Article[]>(`http://localhost:3000/articles`);
  }
  OnSaveArticle(ArticleToSave:any): Observable<any> // return observable( thread) ( teba3 ll patron obdervable)
  {

    return this.httpClient.post('http://localhost:3000/articles',ArticleToSave);

  }
  OnDelateArticle(id:string):Observable<void> // type de rotourn dima Observable
  { // return observable void ou any  yani bech trajaa haja ou hata kabaa
    return this.httpClient.delete<void>(`http://localhost:3000/articles/${id}`);
  }
  updateOnDelateArticle(idc: string , ArticleToSave: Article ) : Observable <any>
  {
    return this.httpClient.put(`http://localhost:3000/articles/${idc}`,ArticleToSave);
  }
  getArticleById(id:string):Observable<any>
  {
    return this.httpClient.get<any>(`http://localhost:3000/articles/${id}`);
  }

}
