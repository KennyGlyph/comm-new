import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { MemberDashboardComponent } from './member-dashboard.component'; 
 
@NgModule({ 
  declarations: [ 
    MemberDashboardComponent 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [MemberDashboardComponent] 
}) 
export class MemberDashboardModule { } 
