import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { MemberComponent } from './member.component'; 
 
@NgModule({ 
  declarations: [ 
    MemberComponent 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [MemberComponent] 
}) 
export class MemberModule { } 
