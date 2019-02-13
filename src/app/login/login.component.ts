import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private userModel : User;

  	constructor(private router : Router) {
  		this.userModel = new User();
  	}

	ngOnInit() {

	}

	onSubmit() {
		this.router.navigate(['/tweeter']);
	}

}
