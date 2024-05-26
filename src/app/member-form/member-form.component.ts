import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!:FormGroup // declaration de variable form => !  bech nkasti
  idcourant !:string
  //ingection de dependance  dans le constructeur
  constructor(
     private MS:MemberService,
     private router : Router,
     private activatedRoute : ActivatedRoute,
    ){}
  ngOnInit():void {
    // bech ntastin est ce que a7na fi edit ou create bech na3raf chnafichi
      //1 recuperer l id de url
    this.idcourant = this.activatedRoute.snapshot.params['id']; // bech njib route mta page // snapshot image 3iha
    console.log(this.idcourant);
      // 2 tester sur id 3andha valeur ou
    if(!!this.idcourant) // !! trouli yani deferent de indefident  => lezmou ikoun existe w mahyech indefident
    {
      // 3 si id existe => edit
      this.MS.getMemberById(this.idcourant).subscribe((x)=>{ // appel ll getMemberById(id)
       console.log(x);
       this.initForm1(x) ;// initForme1(m) bech t3abili les input

      }); // type de retourn de
    }
    else{
      // 4 si id n'existe => create => donc bech n3ayat ll init form
      this.initForm() ; // dima l 'appel bel this.
    }

  } // onloud en chargement
  initForm1(x:Member): void
  {
    this.form = new FormGroup({
      cin : new FormControl(x.cin,[Validators.required]), // null par defeaux null
      name : new FormControl(x.name,[Validators.required]),
      cv : new FormControl(x.cv,[Validators.required]),
      type : new FormControl(x.type,[Validators.required]),

    })
  }

  initForm(): void
  {
    this.form = new FormGroup({
      cin : new FormControl(null,[Validators.required]), // null par defeaux null
      name : new FormControl(null,[Validators.required]),
      cv : new FormControl(null,[Validators.required]),
      type : new FormControl(null,[Validators.required]),

    })
  }
  // fonction onsub bech nrecuperi les donnes  de le formulaire w ajout fi tab (bd)
  onsub():void {
    // bech ntasi al route ya bech namel edit ou post
    if(!!this.idcourant) { // bech na3mel el edit
      this.MS.updateMember(this.idcourant,this.form.value).subscribe(()=>{
        this.router.navigate(['/members']) // bech narja3 ll tableau bad yamel edit
      });

    }
    else{
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

}
