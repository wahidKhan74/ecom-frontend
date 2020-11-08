import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { Routes, RouterModule } from '@angular/router';

const productRoutes:Routes=[
  { path :'' ,component :ProductComponent},
  { path :'detail' ,component :ProductDetailComponent},
  { path :'add' ,component :AddProductComponent},
  { path :'update' ,component :UpdateProductComponent},
]

@NgModule({
  declarations: [    
    ProductComponent,
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule , RouterModule.forChild(productRoutes)
  ],
  exports:[ RouterModule ]
})
export class ProductModule { }
