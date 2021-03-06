import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PathService } from 'src/app/services/path.service';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private httpOptions: Object = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text'
 }


  constructor(private http: HttpClient, private pathService: PathService) {
  }

  getData(path: string): Observable<any> {
    return this.http.get<any>(path, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }

  errorHandle(err: any) {
    let errorMessage = '';
     if(err.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = err.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}