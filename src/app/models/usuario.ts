export interface Usuario {
  id: string;
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  foto: string;
  logueado: boolean;
  esAdmin: boolean;
}
