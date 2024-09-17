import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit , OnDestroy{
  constructor(
    private _ProductService:ProductService
  ){}
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  ngOnInit(): void {
    this.setValueOfProductsArray();
  }

  // ===================================
  filteredProducts:any[]=[];
  products:any[]=[];
  searchValue:string = "";
  unSubscribe = new Subject<void>();
  // ===================================

  setValueOfProductsArray(){
    const allProducts = sessionStorage.getItem('AllProducts');
    if(allProducts){
      this.products = JSON.parse(allProducts);
      this.filteredProducts = this.products;
    }else{
      this.getAllProducts();
    }
  }
  getAllProducts(){
    this._ProductService.getAllProducts().pipe(takeUntil(this.unSubscribe)).subscribe({
      next:(response:any)=>{
        this.products = response.data;
        this.filteredProducts = this.products;
        sessionStorage.setItem('AllProducts',JSON.stringify(this.products));
      }
    })
  }

  SearchByTitle(){
    this.filteredProducts = this.products.filter(item=> item.title.includes(this.searchValue))
  }


}
