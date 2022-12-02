import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private activateRoute: ActivatedRoute) {
    this.getAuthorizationCode();
  }

  ngOnInit(): void {
    this.authService.getToken().pipe(take(1)).subscribe((tokens) => {
      console.log('tokens = ', tokens);
      if ((tokens as any)?.id_token) {
        sessionStorage.setItem('id_token', (tokens as any).id_token);
        sessionStorage.setItem('refresh_token', (tokens as any).refresh_token);
      }

    });
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {

      if (params?.['code']) {
        this.authService.code = params['code'];
        console.log('code -- ', this.authService.code);
      }

    });
  }

// alternative to not get memory leaks
// ngOnDestroy() {
//     this.subscription.unsubscribe();
// }
}
