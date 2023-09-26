import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private usrService: UsuariosService,
              private platform: Platform) {

  }

  ngOnInit(): void {
    this.usrService.traer();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await SplashScreen.show({
        showDuration: 2000,
        autoHide: true,
      });
    });
}
}
