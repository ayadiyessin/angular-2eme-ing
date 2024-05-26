import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-affiche-dialog',
  templateUrl: './affiche-dialog.component.html',
  styleUrls: ['./affiche-dialog.component.css']
})
export class AfficheDialogComponent {
  title!:string;
  lieu!:string;
  dateDebut!: string;
  dateFin!: string;
  // forcage de type bech iwali ijini modale dialoge  5ater ken ijini page 3adiaa
  constructor(public dialogRef: MatDialogRef<AfficheDialogComponent>,@Inject(MAT_DIALOG_DATA) data:any) {  // forsage de type ConfirmDialogComponent raja3neh de type dialoge (modale => wala boite)//wala yothhor modale
  this.title  ="affiche EVT : "+data.titre;
  this.lieu=data.lieu;
  this.dateDebut=data.dateDebut;
  this.dateFin=data.dateFin;

}

}
