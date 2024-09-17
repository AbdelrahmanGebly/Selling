import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    AllCategoriesComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class CategoryModule { }
