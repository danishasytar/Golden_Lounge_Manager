import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MealPage } from '../pages/meal/meal';
import { FacilityPage } from '../pages/facility/facility';
import { InventoryPage } from '../pages/inventory/inventory';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { LoginPage } from '../pages/login/login';
import { PlatinumMealListingPage } from '../pages/platinum-meal-listing/platinum-meal-listing';
import { BusinessClassMenuListingPage } from '../pages/business-class-menu-listing/business-class-menu-listing';
import { StaffManpowerPage } from '../pages/staff-manpower/staff-manpower';
import { AboutPage } from '../pages/about/about';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    MealPage,
    FacilityPage,
    InventoryPage,
    FacilitiesPage,
    LoginPage,
    PlatinumMealListingPage,
    BusinessClassMenuListingPage,
    StaffManpowerPage,
    AboutPage,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    MealPage,
    FacilityPage,
    InventoryPage,
    FacilitiesPage,
    LoginPage,
    PlatinumMealListingPage,
    BusinessClassMenuListingPage,
    StaffManpowerPage,
    AboutPage,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}