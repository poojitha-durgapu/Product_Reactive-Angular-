import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import {ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductShellComponent } from './product-shell.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductShellComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path:'productsReactive', component:ProductListComponent},
    ]),
    SharedModule
  ]
})
export class ProductReactiveModule { }
