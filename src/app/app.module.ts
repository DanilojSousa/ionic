import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebRoutingModule } from './component/web/web-routing.module';
import { SistemaRoutingModule } from './component/sistema/sistema-routing.module';
import { IosRoutingModule } from './component/ios/ios-routing.module';
import { AndroidRoutingModule } from './component/android/android-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule, 
     NgbModule,
     WebRoutingModule, 
     SistemaRoutingModule,
     IosRoutingModule, 
     AndroidRoutingModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
