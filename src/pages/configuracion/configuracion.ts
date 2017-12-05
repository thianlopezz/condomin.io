import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CambiarContrasenaPage } from '../cambiar-contrasena/cambiar-contrasena';

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(opcion) {

    switch (opcion) {
      case 'contrasena':
        this.navCtrl.push(CambiarContrasenaPage);
        break;
      case '':
        // this.navCtrl.push(QuejasPage);
        break;
    }
  }

}
