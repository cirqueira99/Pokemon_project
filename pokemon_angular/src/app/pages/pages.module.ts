import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LibraryModule } from './library/library.module';



@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    LibraryModule
  ]
})
export class PagesModule { }
