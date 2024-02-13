import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';

const routes: Routes = [
  {
    path: 'members',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:MemberComponent
  },
  {
    path: 'create',
    component:MemberFormComponent
  },
  { // rederection ll members  kif fi vid /
    path: '',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    redirectTo:"members" // bech ki yodkol yhezni ll members
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
