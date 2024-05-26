import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  user !:any // ! bech yamelou l inisalisation mte3ou haseb el type
  constructor(private auth : AuthService, private router:Router){
      // tsirelhom el lansment fi chargement mta page  kima ngOnINIT
      this.auth.getUserClaims().then((u)=>{
        this.user= u;
        if(!!this.user)
        {
          console.log("connected as "+this.user.displayName); //displayName afficher el esem w la9ab tjibhaa mel mail
          console.log("photo "+this.user.photoURL);

        }


      })
  } //private auth : AuthService injection de service

  logout(): void {
    this.auth.doLogout().then(() =>{ // .then 5ater type de retoure de methode dogout() est promise
    this.router.navigate(['/login']);
    }
    )
    }

}
