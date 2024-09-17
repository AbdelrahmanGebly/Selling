import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBoxComponent } from './components/cart-box/cart-box.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CuttingPipe } from './Pipes/cutting.pipe';



@NgModule({
  declarations: [
    CartBoxComponent,
    LoaderComponent,
    CuttingPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartBoxComponent,
    LoaderComponent,
    CuttingPipe
  ]
})
export class SharedModule { }
