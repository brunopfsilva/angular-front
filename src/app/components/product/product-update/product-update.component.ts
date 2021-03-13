import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  //active router pega o parametro pela url
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  product: Product;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readByIdProduct(id).subscribe(product => {
      // ele recupera o objecto vindo do serviço
      this.product = product
    })
  }


  updateProductSucess(): void {
    this.productService.updateProduct(this.product).subscribe(
      () => {
        this.productService.showMessage("Atualizado com sucesso!")
        //volta a tela de produtos
        this.router.navigate(['/products']);
      }
    )
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
