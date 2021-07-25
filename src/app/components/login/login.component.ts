import { AutheticationService } from './../../services/authetication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AutheticationService) { }

  loginForm: FormGroup;
  enterSuccess: boolean = false;
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const userData = this.loginForm.value;
    this.authService.login(userData);
    this.enterSuccess = true;
  }

}
