import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  email: string = "";
  password: string = "";
  loginForm!: FormGroup;

  constructor(private userServ: UsuariosService,
              private msgSrv: MensajesService,
              private authSrv: AuthService) { }

  get emailLogin() {
    return this.loginForm.get('emailLogin');
  }
  get passwordLogin() {
    return this.loginForm.get('passwordLogin');
  }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        emailLogin: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        passwordLogin: new FormControl('', [Validators.required])
      },
      Validators.required
    );
  }


  onSubmitLogin() {

      this.authSrv.iniciarSesion(this.emailLogin?.value, this.passwordLogin?.value);

    }

    loginAutomatico(perfil: string) {
      switch (perfil) {
        case 'admin':
          this.loginForm.setValue({
            emailLogin: 'admin@admin.com',
            passwordLogin: '111111',
          });
          break;
        case 'invitado':
          this.loginForm.setValue({
            emailLogin: 'invitado@invitado.com',
            passwordLogin: '222222',
          });
          break;
        case 'usuario':
          this.loginForm.setValue({
            emailLogin: 'usuario@usuario.com',
            passwordLogin: '333333',
          });
          break;
        case 'anonimo':
          this.loginForm.setValue({
            emailLogin: 'anonimo@anonimo.com',
            passwordLogin: '444444',
          });
          break;
        case 'tester':
          this.loginForm.setValue({
            emailLogin: 'tester@tester.com',
            passwordLogin: '555555',
          });
          break;
    }
  }

}
