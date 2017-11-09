import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealPage } from '../meal/meal';
import { FacilityPage } from '../facility/facility';
import { InventoryPage } from '../inventory/inventory';
import { StaffManpowerPage } from '../staff-manpower/staff-manpower';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {
  }

  goToMeal(params):void{
    if (!params) params = {};
    this.navCtrl.setRoot(MealPage);
  }goToFacility(params):void{
    if (!params) params = {};
    this.navCtrl.setRoot(FacilityPage);
  }goToInventory(params):void{
    if (!params) params = {};
    this.navCtrl.setRoot(InventoryPage);
  }goToStaffManpower(params):void{
    if (!params) params = {};
    this.navCtrl.setRoot(StaffManpowerPage);
  }
  
}
