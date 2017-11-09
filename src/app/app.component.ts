import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { MealPage } from '../pages/meal/meal';
import { FacilityPage } from '../pages/facility/facility';
import { InventoryPage } from '../pages/inventory/inventory';
import { StaffManpowerPage } from '../pages/staff-manpower/staff-manpower';
import { AboutPage } from '../pages/about/about';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage= LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToDashboard(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DashboardPage);
  }goToMeal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MealPage);
  }goToFacility(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FacilityPage);
  }goToInventory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InventoryPage);
  }goToStaffManpower(params){
    if (!params) params = {};
    this.navCtrl.setRoot(StaffManpowerPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }goToPage1(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page1Page);
  }goToPage2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page2Page);
  }goToPage3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page3Page);
  }goLogIn(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: false,
      direction: 'forward'
    });
  }
}
