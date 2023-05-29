import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  cadastro: boolean;

  constructor(private router: Router) {

  }

  onSubmit(){
    this.router.navigate(['/home'])
  }

  cadastros( event: { preventDefault: () => void; } ) {
    event.preventDefault();
    this.cadastro = true;
  }

  cancelaCadastro() {
    this.cadastro = false;
  }

}
