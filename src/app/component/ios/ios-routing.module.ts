import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [
  {
    path: '',
    component: AppRoutingModule,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IosRoutingModule {}