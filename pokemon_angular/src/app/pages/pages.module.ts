import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LibraryModule } from './library/library.module';



@NgModule({
  imports: [
    HomeModule,
    LibraryModule
  ]
})
export class PagesModule { }
