import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ArticleFormComponent } from './article-form/article-form.component';
import { MatSortModule } from '@angular/material/sort';
import { ArticleFormeModalComponent } from './article-forme-modal/article-forme-modal.component'; // sort de tableau
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EvtCreateComponent } from './evt-create/evt-create.component';
import { AfficheDialogComponent } from './affiche-dialog/affiche-dialog.component';
import {NgChartsModule} from 'ng2-charts';
import { ModalememberComponent } from './modalemember/modalemember.component';
import { ModaldetailpubComponent } from './modaldetailpub/modaldetailpub.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ToolComponent,
    ArticleComponent,
    EventComponent,
    LoginComponent,
    ArticleFormComponent,
    ArticleFormeModalComponent,
    EvtCreateComponent,
    AfficheDialogComponent,
    ModalememberComponent,
    ModaldetailpubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FlexLayoutModule, // mta les btn
    //teb3inn ll template
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    // fin template
    MatFormFieldModule,
    MatInputModule,
    //hethy ll service
    HttpClientModule,
    //hethom ll formgroupe
    FormsModule,
    ReactiveFormsModule,
    //fin
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    //hethy mta dialog
    MatDialogModule,
    //faierbase
    FirebaseModule,

    // cards login
    MatCardModule,
    // hethy ll tab articele heki pagination
    MatPaginatorModule,
    MatSortModule,
    // hethom bech amelna input date
    MatDatepickerModule,
    MatNativeDateModule,
    // fin input date
    NgChartsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
