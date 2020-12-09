import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { LoginComponent } from './pages/login/login.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MemberComponent } from './pages/member/member.component';
import { MemberDashboardComponent } from './pages/member/dashboard/member-dashboard.component';
import { MemberActivitiesComponent } from './pages/member/activities/member-activities.component';
import { MemberEnrolmentComponent } from './pages/member/enrolment/member-enrolment.component';

// Test
import { TestComponent } from './pages/test/test.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    LoginComponent,
    MembershipComponent,
    SignupComponent,

    MemberComponent,
    MemberDashboardComponent,
    MemberActivitiesComponent,
    MemberEnrolmentComponent,

    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
