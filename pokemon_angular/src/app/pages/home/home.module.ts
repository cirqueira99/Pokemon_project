import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

const home_route: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent, TopComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(home_route),    
  ]
})
export class HomeModule { }
