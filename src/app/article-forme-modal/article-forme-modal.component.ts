import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-forme-modal',
  templateUrl: './article-forme-modal.component.html',
  styleUrls: ['./article-forme-modal.component.css']
})
export class ArticleFormeModalComponent implements OnInit {


  form!:FormGroup
  constructor(private dialogRef : MatDialogRef<ArticleFormeModalComponent>) // hethy bech n forsiha dialog( modal)
  {

  }

  initForm(): void
   {
     this.form=new FormGroup({
       type: new FormControl(null,[Validators.required]),
       titre:new FormControl(null,[Validators.required]),
       date:new FormControl(null,[Validators.required]),
     })
   }
   ngOnInit(): void // lezem nzid implements OnInit
   {
     this.initForm(); // hethy nejm n7otha fi constricteur direct
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
