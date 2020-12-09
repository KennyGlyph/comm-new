import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './signup.component.html', 
  styleUrls: [ 
    './signup.component.scss' 
  ] 
}) 
 
export class SignupComponent {
  private type = '';

  constructor(
    private route : ActivatedRoute,
    private router : Router) {
    const types = ['free', 'sub', 'pub'];

    this.type = route.snapshot.queryParams['type'];
    console.log(route, route.snapshot.queryParams['type'], this.type);

    // default display type, public (pub)
    if (this.type == undefined || !types.includes(this.type)) {
      router.navigate([], { queryParams: { type: 'pub' } });
      this.type = 'pub';
    }
  }
} 
