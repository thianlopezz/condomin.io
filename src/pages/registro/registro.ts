import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  model = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private registroProvider: RegistroProvider, public toastCtrl: ToastController) {
  }
  
  registro(){

    this.registroProvider.registro(this.model)
      .subscribe(
      result => {
        if (result.success) {
          this.showToast(result.mensaje);
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
