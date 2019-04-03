import { Component, OnInit } from '@angular/core';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
