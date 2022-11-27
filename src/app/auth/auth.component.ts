import {Component, OnInit} from '@angular/core';
import { take } from 'rxjs/operators';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getToken().pipe(take(1)).subscribe(()-> {

    });
  }
// alternative to not get memory leaks
// ngOnDestroy() {
//     this.subscription.unsubscribe();
// }
}
