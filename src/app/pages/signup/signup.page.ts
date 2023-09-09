import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  foto: string = '';
  signupForm!: FormGroup;

  constructor(private auth: AuthService) {}

  get getEmail() {
    return this.signupForm.get('emailSignup');
  }

  get getPassword() {
    return this.signupForm.get('passwordSignup');
  }

  get getNombre() {
    return this.signupForm.get('nombreSignup');
  }

  get getApellido() {
    return this.signupForm.get('apellidoSignup');
  }

  // get getFoto() {
  //   return this.signupForm.get('fotoSignup');
  // }




  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        emailSignup: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        passwordSignup: new FormControl('', [
          Validators.required,
          Validators.min(6),
        ]),
        nombreSignup: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        apellidoSignup: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        esAdminSignup: new FormControl(false),
        // fotoSignup: new FormControl('', [Validators.required]),
      },
      Validators.required
    );
  }

  onSubmitSignup() {
    let email = this.getEmail?.value;
    let password = this.getPassword?.value;
    let nombre = this.getNombre?.value;
    let apellido = this.getApellido?.value;
    // let foto = this.getFoto?.value;
    let admin = this.signupForm.get('esAdminSignup')?.value;

    let user: Usuario = {
      id: "",
      email: email,
      password: password,
      nombre: nombre,
      apellido: apellido,
      foto: "",
      esAdmin: admin,
      logueado: false,
    }

    this.auth.registrarCuenta(user);


  }
}
