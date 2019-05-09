import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MsdComponent } from './msd/msd.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


const routes: Routes = [
  { path: 'dropdown',component:DropdownComponent },
  {path:'search',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'msd',component:MsdComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    SearchComponent,
    LoginComponent,
    ChangepasswordComponent,
    MsdComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes),NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
