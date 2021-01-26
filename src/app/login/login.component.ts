import {Component, OnInit} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {LoginService} from './login.service';
import {AlertService} from 'ngx-alerts';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;
  loading = false;
  senhaInvalida = false;
  emailInvalido = false;
  mensagemErro: string;
  mostraSenha = false;
  lembrarLogin = false;

  constructor(private loginService: LoginService,
              private alertService: AlertService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loading = true;
    const login = localStorage.getItem('condoUser');
    if (login) {
      this.iniciaSessao(login);
    }
    this.loading = false;
  }

  logar() {
    if (!(this.email && this.email.includes('@') && this.email.includes('.com'))) {
      this.alertService.warning('Insira um email válido');
      this.emailInvalido = true;
    } else if (!this.senha) {
      this.alertService.warning('Informe sua senha ');
      this.senhaInvalida = true;
    } else {
      this.loading = true;
      const senhaLog = this.sha256(this.senha);
      const login = window.btoa(`${this.email}&${senhaLog}`);
      this.iniciaSessao(login);
    }
  }

  iniciaSessao(login: string) {
    this.loginService.login(login).subscribe(resp => {
      if (resp.status.code === 200) {
        this.authService.usuarioObservable.next(resp.data[0]);
        this.authService.usuario = resp.data[0];
        if (this.lembrarLogin) {
          localStorage.setItem('condoUser', login);
        }
        this.router.navigate(['/home']);
      } else {
        this.alertService.warning('Credenciais inválidas');
        this.mensagemErro = resp.status.message;
        switch (resp.status.code) {
          case 401:
            this.senhaInvalida = true;
            break;
          case 402:
            this.emailInvalido = true;
            break;
          default:
            this.alertService.danger(`${resp.status.code} - ${resp.status.message}`);
            break;
        }
      }
      this.loading = false;
    });
  }

  sha256(str): string {
    return CryptoJS.SHA256(str).toString();
  }

  enterInputLogin() {
    document.getElementsByName('password')[0].focus();
  }

  enterInputSenha() {
    this.logar();
  }
}
