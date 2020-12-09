import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { ActivityComponent } from './activity.component';
 
@NgModule({ 
  declarations: [ 
    ActivityComponent 
  ], 
  imports: [ 
    BrowserModule
  ], 
  providers: [], 
  bootstrap: [ActivityComponent] 
}) 
export class ActivityModule { } 
