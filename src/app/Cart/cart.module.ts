import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { WhishListComponent } from './components/whish-list/whish-list.component';



@NgModule({
  declarations: [
    CartComponent,
    WhishListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
