import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { List } from 'src/app/models/list-model/list.model';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  getList: any = {};

  constructor(private http: HttpClient) {}

  //Send POST request to API Gateway
  sendPostRequest(resource: string, data: any): Observable<object> {
    return this.http
      .post(environment.endpoint + resource, JSON.stringify(data))
      .pipe(catchError(this.handleError));
  }

  //Send GET request to API Gateway
  sendGetRequest(resource: string) {
    this.http.get(environment.endpoint + resource).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        catchError(this.handleError);
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
