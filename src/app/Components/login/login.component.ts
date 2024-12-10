import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  errorMessage: string = '';
  username: string = '';
  password: string = '';
  constructor(private userService: UserService,  private router: Router) {}
  onLogin() {
    this.userService.getUsers().subscribe(
      (users) => {
        const user = users.find(
          (u) => u.username === this.username && u.password === this.password
        );

        if (user) {
          // alert('Login successful!');
          // Handle successful login (e.g., navigation or saving session info)
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Invalid username or password!';
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Server error. Please try again later.';
      }
    );
  }
}
