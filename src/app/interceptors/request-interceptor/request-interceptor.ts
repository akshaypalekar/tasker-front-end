import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerServiceService } from 'src/app/services/spinner-service/spinner-service.service';
import { finalize } from 'rxjs/operators';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';

/** Pass untouched request through to the next request handler */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public _spinner: SpinnerServiceService, public authService: AuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authtoken = localStorage.getItem('idToken');
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authtoken}`,
      },   
    });

    this._spinner.show();

    return next.handle(req).pipe(finalize(() => this._spinner.hide()));
  }
}
