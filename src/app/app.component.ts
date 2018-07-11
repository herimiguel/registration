import { Component } from '@angular/core';
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration page';
  user = new User();
  success = false;
  users= [];


  onSubmit(){
    console.log(this.user.firstName);
    this.users.push(this.user);
    this.success = true;
    
  }
}
