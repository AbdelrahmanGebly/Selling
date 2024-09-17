import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent {
@Input() item : any;

}
