import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMsg = null;
  submitted = false;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private configService: ConfigService,
    private authGuard: AuthGuardService
  ) {
    this.createForm();
   }

  ngOnInit() {
    // Check for redirectUrl from AuthGuardService
    if(this.authGuard.redirectUrl) {
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }
  }

  validateUsername(control) {
    let regexp = new RegExp(/^[a-zA-Z0-9]+$/);
    if(regexp.test(control.value)) {
      return null;
    }
    else {
      return { 'validateUsername': true }
    }
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), this.validateUsername] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)] ]
    });
  }

  onSubmit() {
    this.submitted = true;
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.authService.loginUser(user)
      .subscribe(
        data => {
          if(data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.errorMsg = null;
            console.log('Success: ' + data.msg);
            this.configService.updateShowProperty();
            setTimeout(() => {
              if(this.previousUrl) {
                this.router.navigate([this.previousUrl]);
              }
              else {
                this.router.navigate(['/dashboard']);
              }
            }, 1200);
          }
          else {
            this.submitted = false;
            this.errorMsg = data.msg;
            console.log('Fail: ' + data.msg);
          }
        }
      );
  }

}
