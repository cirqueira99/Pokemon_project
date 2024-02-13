import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { RouterModule, Routes } from '@angular/router';

const library_routes: Routes = [
  { path: '', component: LibraryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(library_routes)
  ]
})
export class LibraryModule { }
