import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { QuejasProvider } from '../../providers/quejas/quejas';
import { QuejasPage } from '../../pages/quejas/quejas';

@Component({
  selector: 'page-crear-queja',
  templateUrl: 'crear-queja.html',
})
export class CrearQuejaPage {

  model = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quejasProvider: QuejasProvider,
    public toastCtrl: ToastController) {
  }

  guardarQueja() {

    this.quejasProvider.matenimiento(this.model)
      .subscribe(
      result => {
        if (result.success) {
          this.showToast(result.mensaje);

          setTimeout(() => {
            this.navCtrl.push(QuejasPage);
          }, 700);

        } else {
          this.showToast(result.mensaje);
        }
      },
      error => {
        this.showToast('Revisa que tengas una conexion a internet!');
      });

  }

  showToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

}
