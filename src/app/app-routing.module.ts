import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, NavigationEnd } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { LoginComponent } from './pages/login/login.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { SignupComponent } from './pages/signup/signup.component';

import { MemberComponent } from './pages/member/member.component';
import { MemberDashboardComponent } from './pages/member/dashboard/member-dashboard.component';
import { MemberActivitiesComponent } from './pages/member/activities/member-activities.component';
import { MemberEnrolmentComponent } from './pages/member/enrolment/member-enrolment.component';

import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activity', component: ActivityComponent },
  //{ path: 'about', component: AboutComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },

  {
    path: 'member', component: MemberComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: MemberDashboardComponent },
      { path: 'activities', component: MemberActivitiesComponent },
      { path: 'enrolment', component: ActivityComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
