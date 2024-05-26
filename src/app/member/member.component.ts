import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalememberComponent } from '../modalemember/modalemember.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  constructor(private MS: MemberService, private dialog: MatDialog) {
    // private MS:MemberService injection de dependance
  }
  nom = 'yassine';
  // tableau
  //dataSource:Member[]=GLOBAL._DB.mumbers  // jebnaa .json mel global
  // Member models mte3naa => bech n9olou tb de Member
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'cv',
    'type',
    'createDate',
    'action',
  ]; // chkoun bech  tsir try hethom l clé

  //dataSource: any[] = this.MS.tab; // baelneha 5ater el filter y5dem ala MatTableDataSource
  dataSource = new MatTableDataSource(this.MS.tab); // 5ater el filter y5dem ala MatTableDataSource(5ater fonction filter defini fi MatTableDataSource)

  edit(id: string): void {
    //appeler la fonction de service OnEdit()
  }
  delate(id: string): void {
    // void retourne de fonction
    // bech n7elou el modale dialog ConfirmDialogComponent
    //1er lancer le boite ( ouvrire le boite )
    // njibouha mel material
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      // ma nejem namelha ken ma ykoun el ConfirmDialogComponent forser dialog
      height: '200px',
      width: '300px',
    });
    // 2 attender la resultata de l utilisateur
    dialogRef.afterClosed().subscribe((result) => {
      // njibouha mel material
      console.log(`Dialog result: ${result}`); // result hethy el repense mta dialoge eli bathha [mat-dialog-close] fi html
      if (result) {
        // itha true yani nzel ala btn delete
        // 3 if (confirme )
        //appeler la fonction de service OnDelate()
        this.MS.OnDelate(id).subscribe(() => {
        // this.dataSource = this.MS.tab; // 9oul aliaa amelt reload ll tab bech ma ya9adch ythhorli l 9dim
        //baelneha 5ater el filter y5dem ala MatTableDataSource
         this.dataSource.data = this.MS.tab; // d5alna ll data mta data source eli de type MatTableDataSource
         //dataSource = new MatTableDataSource(this.MS.tab); ma na93adch kol mara namel new MatTableDataSource

        }); // type de retourn de
      }
    });
  }

  logDataSource(dataSource: any) {
    console.log(dataSource);
  }
  ngOnInit(): void {
    this.logDataSource(this.dataSource);
  }
  // recherche filter table
//dataSource1 = new MatTableDataSource(this.dataSource);

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  console.log(filterValue);
}
view(id:any)
{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '700px';
    dialogConfig.data= id;
    this.dialog.open(ModalememberComponent,dialogConfig);


}
}
