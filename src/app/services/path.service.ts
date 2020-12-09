import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private _relPath = 'wp-content/themes/angular-node';

  constructor() { }

  public get relPath() {
    return 'wp-content/themes/angular-node';
  }
}
