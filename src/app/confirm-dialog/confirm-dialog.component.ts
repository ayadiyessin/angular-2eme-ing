import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  // forcage de type bech iwali ijini modale dialoge  5ater ken ijini page 3adiaa
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { } // forsage de type ConfirmDialogComponent raja3neh de type dialoge (modale => wala boite)//wala yothhor modale 
  title  ="Confirm ?";
  content = "Confirm your action.";
  cancel ="cancel";
  Delete="delete";


}
