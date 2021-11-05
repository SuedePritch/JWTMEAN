import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidateService } from 'src/app/service/validate.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  name!: String;
  username!: String;
  email!: String;
  password!: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClientModule
    ) { }

  ngOnInit(){
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      alert('Please fill in all fields');
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
    alert('Please use a valid email');
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe((data:any) => {
      if(data.success) {
        this.router.navigate(['/login']);
        console.log(user)
        return true;
      } else {
        this.router.navigate(['/register']);
        return false;
      }
    });
    return true;
}
}

