import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMsg = null;
  submitted = false;
  usernameValid;
  usernameMsg;
  emailValid;
  emailMsg;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit() { 
  }

  // Regexp Email Validation 
  validateEmail(control) {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(regexp.test(control.value)) {
      return null;
    }
    else {
      return { 'validateEmail': true }
    }
  }

  // Validate Username
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
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), this.validateEmail] ],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), this.validateUsername] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)] ],
      confirm: [ '', Validators.required ]
    }, 
    { validator: this.matchingPasswords('password', 'confirm') }
    );
  }

  // Matching Password and Confirm Password
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      if(group.controls[password].value === group.controls[confirm].value) {
        return null;
      }
      else {
        return { 'matchingPasswords': true }
      }
    }
  }

  // Check if E-mail Exists in DB already
  checkEmail() {
    let email = this.form.get('email').value;
    this.authService.checkEmail(email)
      .subscribe(
        data => {
          if(data.success) {
            this.emailValid = true;
            this.emailMsg = data.msg;
          }
          else {
            this.emailValid = false;
            this.emailMsg = data.msg;
          } 
        }
      );
  }

  // Check if Username exists in DB already
  checkUsername() {
    let username = this.form.get('username').value;
    this.authService.checkUsername(username)
      .subscribe(
        data => {
          if(data.success) {
            this.usernameValid = true;
            this.usernameMsg = data.msg;
          }
          else {
            this.usernameValid = false;
            this.usernameMsg = data.msg;
          }
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value,
    }

    this.authService.registerUser(user)
      .subscribe(
        data => {
          if(data.success) {
            console.log(data.msg);
            this.errorMsg = null;
            this.router.navigate(['/login']);
          }
          else {
            console.log(data.msg);
            this.errorMsg = data.msg;
            this.submitted = false;
            setTimeout(() => {
              this.errorMsg = null;  
            }, 3000);
          }
        }
      );
  }

}
