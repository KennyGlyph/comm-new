import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { MembershipComponent } from './membership.component'; 
 
@NgModule({ 
  declarations: [ 
    MembershipComponent 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [MembershipComponent] 
}) 
export class MembershipModule { } 
