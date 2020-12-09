import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private http: HttpClient;
  private httpOptions: Object = {

    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // }),
    responseType: 'text'
 }


  constructor(private p_http: HttpClient) {
    this.http = p_http;
  }

  getData(): Observable<any> {
    return this.http.get<any>('api/test-get.php', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      )
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