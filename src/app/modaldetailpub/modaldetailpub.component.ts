import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Article } from 'src/Modeles/Article';
import { Member } from 'src/Modeles/Member';

@Component({
  selector: 'app-modaldetailpub',
  templateUrl: './modaldetailpub.component.html',
  styleUrls: ['./modaldetailpub.component.css']
})
export class ModaldetailpubComponent {
  idcourant!:Article;



  constructor(public dialogRef: MatDialogRef<ModaldetailpubComponent>,@Inject(MAT_DIALOG_DATA) data:any){

    this.idcourant= data ;
    console.log(data);

  }

}
