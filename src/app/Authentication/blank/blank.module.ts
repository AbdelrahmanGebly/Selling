import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { BlankComponent } from './blank.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavBlankComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BlankModule { }
