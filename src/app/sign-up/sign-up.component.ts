import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	public userModel : any;
  	
  	constructor() {
   	this.userModel = new User();
   	}

	ngOnInit() {

	}
	onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userModel))
  }

}
