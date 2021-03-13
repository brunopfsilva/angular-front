import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';




const routes: Routes = [


  {
    path: '', component: HomeComponent,
  },
  {
    //rota com lazy load asyncrono
  //  path: 'products', loadChildren: () => import ('./views/product-crud/product-crud.component')
   // .then(m => m.ProductCrudComponent)
    path: 'products', component: ProductCrudComponent,
  },
  {
    path: 'products/create', component: ProductCreateComponent,
  },
  {
    path: 'products/update/:id', component: ProductUpdateComponent
  },
  {
    path: 'products/delete/:id', component: ProductDeleteComponent
  }

];
//preloading precarregamento de rotas 
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
