import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonHoverableComponent } from './components/buttons/button-hoverable/button-hoverable.component';
import { TablesLayoutComponent } from './components/contents/tables-layout/tables-layout.component';
import { InputDateTimeComponent } from './components/input-forms/input-date-time/input-date-time.component';
import { InputTempComponent } from './components/input-forms/input-temp/input-temp.component';
import { TitleInputComponent } from './components/title-input/title-input.component';
import { HrComponent } from './components/hr/hr.component';
import { InputDetailsComponent } from './components/input-forms/input-details/input-details.component';
import { UsernameComponent } from './components/username/username.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { SignInComponent } from './components/user-authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/user-authentication/sign-up/sign-up.component'; 
import { ForgotPasswordComponent } from './components/user-authentication/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';
import { RecordTableComponent } from './components/record-table/record-table.component';
import { ModificationTableComponent } from './components/contents/modification-table/modification-table.component';
import { InsertionTableComponent } from './components/contents/insertion-table/insertion-table.component';
import { InsertScreenComponent } from './components/screens/insert-screen/insert-screen.component';
import { ModifyScreenComponent } from './components/screens/modify-screen/modify-screen.component';
import { PageButtonsComponent } from './components/buttons/page-buttons/page-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ButtonComponent,
    TablesLayoutComponent,
    InputDateTimeComponent,
    InputTempComponent,
    TitleInputComponent,
    HrComponent,
    InputDetailsComponent,
    ButtonHoverableComponent,
    UsernameComponent,
    HomeScreenComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    RecordTableComponent,
    ModificationTableComponent,
    InsertionTableComponent,
    InsertScreenComponent,
    ModifyScreenComponent,
    PageButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
