import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!:FormGroup
  //ingection de dependance  dans le constructeur
  constructor(
     private MS:MemberService,
     private router : Router
    ){}
  ngOnInit():void {
    this.initForm() ; // dima l 'appel bel this.
  } // onloud en chargement
  initForm(): void
  {

    this.form = new FormGroup({
      cin : new FormControl(null,[Validators.required]), // null par defeaux null
      name : new FormControl(null,[Validators.required]),
      cv : new FormControl(null,[Validators.required]),
      type : new FormControl(null,[Validators.required]),

    })
  }
  // fonction onsub bech nrecuperi les donnes  de le formulaire
  onsub():void {
    console.log(this.form.value); // recuperer touts les varable
    console.log(this.form.value.cin); // recuperer le contenue de cin
    // appeler la fonction OnSave(this.form.value)
    // du service MemberService  qui est injecte dans ce component
    const MemberToService = this.form.value;
    this.MS.OnSave(MemberToService).subscribe(()=>{
      this.router.navigate(['/members']) // bech narja3 ll tableau bad l'ajout 
    }); // houni saret el post sayey
    // composent dima jous le role de subscrible

  }

}
