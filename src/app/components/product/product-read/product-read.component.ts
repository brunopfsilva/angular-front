import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {


  products: Product[];

  displayedColumns = ['id','name','price','action'];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.productService.readProduct().subscribe(products =>{
      this.products = products;
    })
  }

  deleteProduct():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.deleteByIdProduct(id).subscribe(()=> {
      this.productService.showMessage("Produto deletado com sucesso");
      this.router.navigate(['/products']);
    });
  }

  

}
