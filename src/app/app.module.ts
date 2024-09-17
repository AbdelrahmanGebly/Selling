import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { FooterComponent } from './Shared/components/footer/footer.component';
import { NotFoundComponent } from './Shared/components/not-found/not-found.component';
import { CartModule } from './Cart/cart.module';
import { CategoryModule } from './Category/category.module';
import { SharedModule } from './Shared/shared.module';
import { AuthModule } from './Authentication/auth/auth.module';
import { BlankModule } from './Authentication/blank/blank.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './Shared/Interceptors/loading.interceptor';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    CategoryModule,
    SharedModule,
    ProductsModule,
    AuthModule,
    BlankModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
