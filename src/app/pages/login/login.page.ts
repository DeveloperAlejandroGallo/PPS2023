import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

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


}
