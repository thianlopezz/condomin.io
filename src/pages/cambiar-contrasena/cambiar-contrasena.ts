import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cambiar-contrasena',
  templateUrl: 'cambiar-contrasena.html',
})
export class CambiarContrasenaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContrasenaPage');
  }

}
