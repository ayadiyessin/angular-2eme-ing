import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth : AuthService, private router:Router){}

  sigin():void{
    this.auth.doGoogleLogin().then(() =>{
      this.router.navigate(['/members']);
    }
    )
  }

}
