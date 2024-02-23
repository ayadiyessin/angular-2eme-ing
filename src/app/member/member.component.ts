import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
constructor(private MS:MemberService, private dialog:MatDialog){ // private MS:MemberService injection de dependance

}
nom="yassine";
// tableau
//dataSource:Member[]=GLOBAL._DB.mumbers  // jebnaa .json mel global
                                        // Member models mte3naa => bech n9olou tb de Member
displayedColumns: string[] = ['id','cin', 'name', 'cv', 'type','createDate','action']; // chkoun bech  tsir try hethom l clé

dataSource:any[]=this.MS.tab

edit(id:string):void{
  //appeler la fonction de service OnEdit()
}
delate(id:string):void{ // void retourne de fonction
  // bech n7elou el modale dialog ConfirmDialogComponent
    //1er lancer le boite ( ouvrire le boite )
      // njibouha mel material
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { // ma nejem namelha ken ma ykoun el ConfirmDialogComponent forser dialog
      height: '200px',
      width: '300px',
    });
    // 2 attender la resultata de l utilisateur
    dialogRef.afterClosed().subscribe(result => { // njibouha mel material
      console.log(`Dialog result: ${result}`); // result hethy el repense mta dialoge eli bathha [mat-dialog-close] fi html
      if (result ){ // itha true yani nzel ala btn delete
        // 3 if (confirme )
        //appeler la fonction de service OnDelate()
        this.MS.OnDelate(id).subscribe(()=>{
          this.dataSource=this.MS.tab; // 9oul aliaa amelt reload ll tab bech ma ya9adch ythhorli l 9dim
        }); // type de retourn de
      }
    });

}
}


