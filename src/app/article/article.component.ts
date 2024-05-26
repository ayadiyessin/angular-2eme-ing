import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/Modeles/Article';
import { GLOBAL } from '../app-config';
import { ArticleService } from 'src/Services/article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ArticleFormeModalComponent } from '../article-forme-modal/article-forme-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
 //injection de dépendences
 constructor(private AS:ArticleService,private dialog:MatDialog , private _liveAnnouncer: LiveAnnouncer ,private router:Router){
  this.getArticles(); // ttlansa fi chargement kima el ngONInit
 }
 //datasource:any[]=this.MS.tab
 datasource = new MatTableDataSource<Article>();
 displayedColumns: string[] = ['id','type', 'titre', 'date','action'];
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 delate(id:string):void
 {
   let dialogRef = this.dialog.open(ConfirmDialogComponent, {
     height: '200px',
     width: '300px',
   });
   dialogRef.afterClosed().subscribe(result => {
     if(result)
     {
       //appeler la fonction de service ONDELETE
      //  this.AS.ONDELETE(id).subscribe(()=>{

      //    this.datasource.data=this.AS.tabArticle
      //  })
      // hethy 3melneha bel json-serve
       this.AS.OnDelateArticle(id).subscribe(()=>{

        this.getArticles();
      })
     }
   });

 }

 ngAfterViewInit() {
   this.datasource.paginator = this.paginator;

   this.datasource.sort = this.sort;
 }
 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.datasource.filter = filterValue.trim().toLowerCase();

   if (this.datasource.paginator) {
     this.datasource.paginator.firstPage();
   }
 }

 /** Announce the change in sort state for assistive technology. */
 announceSortChange(sortState: Sort) {
  // This example uses English messages. If your application supports
  // multiple language, you would internationalize these strings.
  // Furthermore, you can customize the message to add additional
  // details about the values being sorted.
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
openDialog() {
  const dialogConfig = new MatDialogConfig(); // hethy bech nbath fiha les donnes ll dialog ou 3aks l

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  //this.dialog.open(ArticleFormeModalComponent, dialogConfig); =< hethy twali zeydaa madem zedna el const eli ta7thaa  // hethy bech t7ele el modal
  const dialogRef = this.dialog.open(ArticleFormeModalComponent, dialogConfig); // dialogRef recuperi biha les donnes men dialog

  dialogRef.afterClosed().subscribe( // hethy bech te5ou les donner eli t3amrou fi dialog
      data => {
        console.log("Dialog output:", data) // lezem n5dem houni 5ater ki to5rej data ma tarafhech
      //   this.AS.OnSave(data).subscribe(()=>{ // houni 3ayat ll onsave() mta service
      //   this.datasource.data = this.AS.tabArticle; // na3mel refrech ll tableau

      // }) // hethy mmenghir json-serve
      this.AS.OnSaveArticle(data).subscribe(()=>{ // houni 3ayat ll onsave() mta service
        this.datasource.data = this.AS.tabArticle; // na3mel refrech ll tableau

      }) // hethy bel json-server
      }
  );
}
openDialogEdit(id:string):void{
  const dialogConfig = new MatDialogConfig(); // hethy bech nbath fiha les donnes ll dialog ou 3aks l

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data =
  {
      date: "4/22/2024",
      titre: 'Angular For Beginners',
      type: 'Angular'
  };

this.dialog.open(ArticleFormeModalComponent, dialogConfig);

}
// hethy bech nzidaa fi tableau fi service
getArticles(){
  this.AS.GetAll().subscribe((r)=>{
    //this.datasource.data=r;
    this.datasource = new MatTableDataSource<Article>(r);
  })
}




}

