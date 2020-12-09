import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { SignupComponent } from './signup.component'; 
 
@NgModule({ 
  declarations: [ 
    SignupComponent 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [SignupComponent] 
}) 
export class SignupModule { } 
