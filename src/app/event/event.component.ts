import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Evt } from 'src/Modeles/Evt';
import { EvtService } from 'src/Services/evt.service';
import { EvtCreateComponent } from '../evt-create/evt-create.component';
import { AfficheDialogComponent } from '../affiche-dialog/affiche-dialog.component';
import { DialogConfig } from '@angular/cdk/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor(private ES: EvtService,private dialog:MatDialog ){ // hethy ttsama injection de dependance


  }
  dataSource !:Evt[]
  ngOnInit(): void {
    this.fetch()
  }
  displayedColumns: string[] = ['id', 'titre', 'lieu', 'dateaDeb','dateFin','action'];
  fetch():void // tjib data mel service
  {
    this.ES.GetAll().subscribe((r)=>{
      this.dataSource = r

    })
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig(); // hethy bech nbath fiha les donnes ll dialog ou 3aks l

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //this.dialog.open(ArticleFormeModalComponent, dialogConfig); =< hethy twali zeydaa madem zedna el const eli ta7thaa  // hethy bech t7ele el modal
    const dialogRef = this.dialog.open(EvtCreateComponent, dialogConfig); // dialogRef recuperi biha les donnes men dialog

    dialogRef.afterClosed().subscribe( // hethy bech te5ou les donner eli t3amrou fi dialog
        data => {
          console.log("Dialog output:", data) // lezem n5dem houni 5ater ki to5rej data ma tarafhech
        //   this.AS.OnSave(data).subscribe(()=>{ // houni 3ayat ll onsave() mta service
        //   this.datasource.data = this.AS.tabArticle; // na3mel refrech ll tableau

        // }) // hethy mmenghir json-serve
        this.ES.OnSaveEvent(data).subscribe(()=>{ // houni 3ayat ll onsave() mta service
          this.fetch();
        }) // hethy bel json-server
        }
    );
  }
  onVoir(id : string):void{

    const dialogConfig = new MatDialogConfig();
    this.ES.getArtcileById(id).subscribe((r)=>{

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = "500px";
      dialogConfig.height = "500px";
      dialogConfig.data = r // envoyer les donnes vers le modal

      this.dialog.open(AfficheDialogComponent, dialogConfig)
    })
  }

}
