import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';

import { HomePage } from '../../pages/home/home';
import { CambiarContrasenaPage } from '../../pages/cambiar-contrasena/cambiar-contrasena';
import { RegistroPage } from '../../pages/registro/registro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    public toastCtrl: ToastController) {
  }

  login() {

    this.loginProvider.login(this.model)
      .subscribe(
      result => {
        if (result.success) {
          this.showToast(result.mensaje);

          setTimeout(() => {
            this.navCtrl.push(HomePage);
          }, 700);

        } else {
          this.showToast(result.mensaje);
        }
      },
      error => {
        this.showToast('Revisa que tengas una conexion a internet!');
      });

  }

  goTo(opcion) {

    switch (opcion) {
      case 'contrasena':
        this.navCtrl.push(CambiarContrasenaPage);
        break;
      case 'registro':
        this.navCtrl.push(RegistroPage);
        break;
    }
  }

  showToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

}
