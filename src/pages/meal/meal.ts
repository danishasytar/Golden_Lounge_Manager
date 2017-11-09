import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlatinumMealListingPage } from '../platinum-meal-listing/platinum-meal-listing';
import { BusinessClassMenuListingPage } from '../business-class-menu-listing/business-class-menu-listing';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {

  constructor(public navCtrl: NavController) {
  }
  

  goPlatMealList(params) {
    if (!params) params = {};
    this.navCtrl.push(PlatinumMealListingPage);
  }

  goBusinessMealList(params) {
    if (!params) params = {};
    this.navCtrl.push(BusinessClassMenuListingPage);
  }
}
