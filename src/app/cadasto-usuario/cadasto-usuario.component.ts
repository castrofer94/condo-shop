import {Component, OnInit} from '@angular/core';
import {AlertService} from 'ngx-alerts';
import {CadastroUsuarioService} from './cadastro-usuario.service';
import {Router} from '@angular/router';
import {Usuario} from '../shared/models/usuario.model';

@Component({
  selector: 'cs-cadasto-usuario',
  templateUrl: './cadasto-usuario.component.html'
})
export class CadastoUsuarioComponent implements OnInit {

  model = new Usuario();
  confirmaSenha: string;
  loading = false;
  email: boolean;
  loadingEmail = false;
  statusEmail: string;
  senhaConfirmada: boolean;

  constructor(private alertService: AlertService,
              private cadastroUsuarioService: CadastroUsuarioService,
              private router: Router) {
  }

  ngOnInit() {
  }

  verificaDispEmail() {
    if (this.model.email && this.model.email.includes('@') && this.model.email.includes('.com')) {
      this.loadingEmail = true;
      this.cadastroUsuarioService.verificaDisponibilidadeEmail(this.model.email).subscribe(resp => {
        if (resp.status.code === 200) {
          this.email = resp.data[0];
          if (!this.email) {
            this.statusEmail = 'Este email já está sendo utilizado';
          }
        } else {
          this.alertService.warning(`${resp.status.code} - ${resp.status.message}`);
        }
        this.loadingEmail = false;
      });
    } else {
      this.email = false;
      this.statusEmail = 'Informe um email válido';
    }
  }

  confirmarSenha() {
    this.senhaConfirmada = this.model.senha && this.confirmaSenha && this.model.senha === this.confirmaSenha;
  }

  salvarUsuario() {
    this.loading = true;
    this.model.datacriacao = new Date();
    if (!this.email) {
      this.alertService.warning('Informe um e-mail válido antes de prosseguir');
      this.loading = false;
      document.getElementsByName('model.email')[0].focus();
    } else if (!this.senhaConfirmada) {
      this.alertService.warning('Você precisa informar uma senha e confirma-la antes de prosseguir');
      this.loading = false;
      document.getElementsByName('model.senha')[0].focus();
    } else {
      this.cadastroUsuarioService.novoUsuario(this.model).subscribe(resp => {
        if (resp.status.code === 200) {
          this.alertService.success('Usuario salvo com sucesso');
          this.router.navigate(['/login']);
        } else {
          this.alertService.warning(`${resp.status.code} - ${resp.status.message}`);
        }
        this.loading = false;
      });
    }
  }
}
