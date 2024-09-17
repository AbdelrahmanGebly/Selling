import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit , OnDestroy{
constructor(
  private _CategoryService:CategoryService,
  private _ToastrService:ToastrService,
){}
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  ngOnInit(): void {
    this.setValueOfCategoriesArray();
  }

// ===================================
unSubscribe :Subject<void> = new Subject<void>();
categories : any[] = [];
filteredCategories : any[] = [];
searchValue:string = '';
// ===================================

setValueOfCategoriesArray(){
  const allCategories = sessionStorage.getItem('AllCategories');
  if(allCategories){
    this.categories = JSON.parse(allCategories);
    this.filteredCategories = this.categories;
  }else{
    this.getAllCategories();
  }
}

getAllCategories(){
  this._CategoryService.getAllCategories().pipe(takeUntil(this.unSubscribe)).subscribe({
    next:(response)=>{
      this.categories = response.data;
      console.log("the value is : = > ", response.data)
      sessionStorage.setItem('AllCategories',JSON.stringify(this.categories));
      this.filteredCategories = this.categories;
    },
    error:(error)=>{
      this._ToastrService.error(error.message);
    }
  })
}
SearchByName(){
  this.filteredCategories = this.categories.filter(item=> item.name.includes(this.searchValue))
}

}
