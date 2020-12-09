import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private _relPath = 'wp-content/themes/angular-node';

  constructor() { }

  public get relPath() {
    return this._relPath;
  }
}
