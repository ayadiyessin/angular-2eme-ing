import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-evt-create',
  templateUrl: './evt-create.component.html',
  styleUrls: ['./evt-create.component.css']
})
export class EvtCreateComponent {
  form!:FormGroup
  constructor(private dialogRef : MatDialogRef<EvtCreateComponent>) // hethy bech n forsiha dialog( modal)

  {

  }
  ngOnInit(): void // lezem nzid implements OnInit
   {
     this.initForm(); // hethy nejm n7otha fi constricteur direct
   }
  initForm(): void
  {
    this.form=new FormGroup({
      id: new FormControl(null,[Validators.required]),
      titre: new FormControl(null,[Validators.required]),
      lieu:new FormControl(null,[Validators.required]),

      dateDebut: new FormControl<Date | null>(null),
      dateFin: new FormControl<Date | null>(null),

    })
  }
  close() : void
  {
   this.dialogRef.close()

   }
  save() : void
  {
   this.dialogRef.close(this.form.value) // isakarli l boit ama 9bal ma ysakarha ybath les donner mta form ll composent origine (eli t7alet menou el modal) => ArticleComp
  }

}
