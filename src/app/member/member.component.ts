import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
constructor(private MS:MemberService){

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
delate(id:string):void{
  //appeler la fonction de service OnDelate()
  this.MS.OnDelate(id).subscribe(()=>{});
}
}


