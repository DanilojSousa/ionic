import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAndroidComponent } from './home-android/home-android.component';
import { FolderAndroid } from './folder-android/folder-android';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [HomeAndroidComponent, FolderAndroid],
  imports: [
    CommonModule,
    BrowserModule, 
    IonicModule.forRoot(),
  ]
})
export class AndroidModule { }
