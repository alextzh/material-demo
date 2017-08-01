import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checked: ['']
    });
  }

  ngOnInit() {
  }
  onLogin() {
    if (this.formModel.valid) {
      this.router.navigate(['/layout']);
    }
  }
}
