import { Component, OnInit } from '@angular/core';
import { LoadingService } from './Shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Selling';
  loading:boolean = false;
  constructor(
    private _LoadingService:LoadingService
  ){}
  ngOnInit(): void {
    this._LoadingService.loadin$.subscribe(s=>{
      this.loading = s;
    })
  }


}
