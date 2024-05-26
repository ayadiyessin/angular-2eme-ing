import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModaldetailpubComponent } from '../modaldetailpub/modaldetailpub.component';

@Component({
  selector: 'app-modalemember',
  templateUrl: './modalemember.component.html',
  styleUrls: ['./modalemember.component.css']
})
export class ModalememberComponent {
  idcourant!:string;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['titre', 'type', 'date', 'action'];


  constructor(public dialogRef: MatDialogRef<ModalememberComponent>,@Inject(MAT_DIALOG_DATA) data:any,private dialog: MatDialog){

    this.idcourant= data.id ;
    console.log(data);
    this.dataSource = new MatTableDataSource(data.tab_pub);
    console.log(this.idcourant)
  }
  view(id:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '700px';
    dialogConfig.data= id;
      this.dialog.open(ModaldetailpubComponent,dialogConfig);



  }
}
