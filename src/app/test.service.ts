import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {
    console.log('test service activated');
  }
}