import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { ArticleFormComponent } from './article-form/article-form.component';


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
  {
    path: 'createArticle',
    pathMatch:'full',
    component:ArticleFormComponent
  },
  {
    path: ':id/editArticle',
    pathMatch:'full',
    component:ArticleFormComponent
  },
  { // rederection ll login  kif fi vid /
    path: '',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa path fera8
    redirectTo:"login" // bech ki yodkol yhezni ll login
  },
  { // hetha bech n5dmoull edit
    path: ':id/edit', // :id BECH N9OLOU ytbedel
    pathMatch:'full',
    component:MemberFormComponent
  },

  {
    path: 'dashboard', // menghir slach /
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:DashboardComponent
  },
  {
    path: 'tools',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:ToolComponent
  },
  {
    path: 'articles',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:ArticleComponent
  },
  {
    path: 'events',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:EventComponent
  },
  {
    path: 'login',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
