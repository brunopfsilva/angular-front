import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  product: Product

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readByIdProduct(id)
      .subscribe(product => {
        this.product = product
      });
  }

  deleteProductSucess(): void {
    this.productService.deleteByIdProduct(`${this.product.id}`).subscribe(
      () => {
        this.productService.showMessage("Produto deletado com sucesso");
        this.router.navigate(['/products']);
      }
    )
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
