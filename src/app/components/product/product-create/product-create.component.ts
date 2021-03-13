import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
  }

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  createProductSucess(): void {
    //cria produto, exibe mensagem e por fim navega para produto
    this.productService.createProduct(this.product).subscribe(()=>{
      this.productService.showMessage("Produto criado com sucesso");
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
