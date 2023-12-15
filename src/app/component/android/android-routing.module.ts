import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeAndroidComponent } from './home-android/home-android.component';

const routes: Routes = [
  {
    path: 'android/home',
    component: HomeAndroidComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidRoutingModule {}