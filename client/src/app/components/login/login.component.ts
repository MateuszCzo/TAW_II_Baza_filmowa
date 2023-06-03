import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public credentials = {
    login: '',
    password: ''
  }

  public logged?: boolean;
  public loggout?: boolean;

  constructor(public authService: AuthService, private router: Router) {
  }

  signIn() {
    return this.authService.authenticate(this.credentials)
      .subscribe(result => {
        if(!result) this.logged = false;
        else {
          this.loggout = false;
          this.credentials = {
            login: '',
            password: ''
          };
          this.router.navigate(['/']);
        }
      })
  }
}
