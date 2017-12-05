import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NoticiasPage } from '../noticias/noticias';
import { QuejasPage } from '../quejas/quejas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(opcion) {

    switch (opcion) {
      case 'noticias':
        this.navCtrl.push(NoticiasPage);
        break;
      case 'quejas':
        this.navCtrl.push(QuejasPage);
        break;
    }
  }
}
