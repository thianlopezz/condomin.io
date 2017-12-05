import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrearQuejaPage } from '../crear-queja/crear-queja';

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html',
})
export class QuejasPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  goTo(opcion) {

    switch (opcion) {
      case 'crear':
        this.navCtrl.push(CrearQuejaPage);
        break;
      case 'quejas':
        this.navCtrl.push(QuejasPage);
        break;
    }
  }

}
