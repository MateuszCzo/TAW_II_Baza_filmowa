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
    email: '',
    password: ''
  };

  public error = '';

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
          this.error = '';
          this.credentials = {
            email: '',
            password: ''
          };
          this.router.navigate(['/']);
        }
      },
      error => {
        this.error = error.error.error;
      })
  }
}
