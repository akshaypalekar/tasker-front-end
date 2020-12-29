import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-headnav-sidenav',
  templateUrl: './headnav-sidenav.component.html',
  styleUrls: ['./headnav-sidenav.component.css']
})
export class HeadnavSidenavComponent {

  showSpinner = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthServiceService) {}

  onSignOut(){
    this.authService.signOut();
  }

}
