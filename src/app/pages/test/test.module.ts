import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { TestComponent } from './test.component';
 
@NgModule({ 
  declarations: [ 
    TestComponent 
  ], 
  imports: [ 
    BrowserModule
  ], 
  providers: [], 
  bootstrap: [TestComponent] 
}) 
export class TestModule { } 
