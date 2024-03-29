import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../models/credentials';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = new Credentials();

  public constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public loginToServer(): void {
    this.loginService.loginRequest(this.credentials).subscribe(
      (loginResult) => {
        alert("Token: "+ loginResult.token + ' ' + loginResult.type);
        this.loginService.token = loginResult.token;
        this.loginService.type = loginResult.type;
        this.loginService.isLoggedIn = true;
        this.loginService.log = false;
        this.loginService.email = this.credentials.email;
        if(this.loginService.type==='user'){
          this.router.navigateByUrl('/chest');
      }else if(this.loginService.type==='admin'){
        this.router.navigateByUrl('/admin-token-for-securityy');
    }else{
        this.router.navigateByUrl(this.loginService.type);
      }
      
       },
      (err) => {
        alert('wrong details :(');
      }
    );
  }
}
