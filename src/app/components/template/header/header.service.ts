import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from 'src/app/model/header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


 private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'Home',
    routeUrl: ''
  })

  //pega os valores
  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }

  constructor() { }
}
