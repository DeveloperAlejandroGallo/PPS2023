import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() titulo: String = '';
  @Input() backButton: Boolean = false;
  url: string = '/home';


  constructor(private auth: AuthService,
              private router: Router) {
                this.url = this.router.url;
              }

  ngOnInit() {}


  onLogout(){
    this.auth.cerrarSesion();
  }

}
