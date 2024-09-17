import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit , OnDestroy{
  constructor(
    private _BrandsService:BrandsService,
  ){}
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  ngOnInit(): void {
    this.setValueOfBrandsArrays();
  }

  // =========================================
  unSubscribe:Subject<void> = new Subject<void>();
  searchValue:string = "";
  allBrands:any[] = [];
  filteredBrands:any[] = [];
  // =========================================
  getAllBrands(){
    this._BrandsService.getAllBrands().pipe(takeUntil(this.unSubscribe)).subscribe({
      next:(response)=>{
        this.allBrands = response.data;
        this.filteredBrands = this.allBrands;
        sessionStorage.setItem('AllBrands',JSON.stringify(this.allBrands))
      }
    })
  }

  setValueOfBrandsArrays(){
    if(sessionStorage.getItem('AllBrands')){
      this.allBrands = JSON.parse(sessionStorage.getItem("AllBrands")!);
      this.filteredBrands = this.allBrands;
    }
    else this.getAllBrands();
  }

  searchByName(){
    this.filteredBrands = this.allBrands.filter(item=> item.name.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
}
