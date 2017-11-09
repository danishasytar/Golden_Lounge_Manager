import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToDashboard(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DashboardPage, {}, {
      animate: false,
      direction: 'forward'
    });
  }
}
