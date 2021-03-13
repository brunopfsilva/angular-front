import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3006/produtos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  //metodo a ser injetado em criar produto
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar     ', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  createProduct(product: Product): Observable<Product> {
    //cria um novo produto
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  errorHandle(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Erro produto não cadastrado", true);
    return EMPTY
  }

  readProduct(): Observable<Product[]> {
    //traz todos os produtos
    return this.http.get<Product[]>(this.baseUrl);
  }

  readByIdProduct(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url);
  }

  deleteByIdProduct(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product);
  }


}
