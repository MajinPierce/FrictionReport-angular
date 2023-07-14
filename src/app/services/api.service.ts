import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string;
  siteUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.siteUrl = environment.siteUrl;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getAreaData(areaName: string): Observable<any>{
    return this.http.get(this.apiUrl + areaName)
    .pipe(retry(1), catchError(this.handleError));
  }

  getAreasInit(): Observable<any> {
    return this.http.get(this.apiUrl + "init")
    .pipe(retry(1), catchError(this.handleError));
  }

  getMapData(): Observable<any> {
    return this.http.get(this.apiUrl + "map")
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
