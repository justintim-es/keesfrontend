import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBackendBackend } from 'src/app/redux/backend/reducer';
import { IKeesState } from 'src/app/redux/combiner';
import { IKeesProduct } from 'src/app/redux/kees-products/interfaces';
import { getKeesProductsIsFetch, getKeesProductsProducts } from 'src/app/redux/kees-products/reducer';

@Component({
  selector: 'app-kees-products',
  templateUrl: './kees-products.component.html',
  styleUrls: ['./kees-products.component.css']
})
export class KeesProductsComponent implements OnInit {
  isFetch: Observable<boolean>;
  backend: Observable<string>;
  products: Observable<IKeesProduct[]>;
  constructor(
    private store: Store<State<IKeesState>>
  ) {
    this.isFetch = this.store.select(getKeesProductsIsFetch);
    this.backend = this.store.select(getBackendBackend);
    this.products = this.store.select(getKeesProductsProducts);
  }

  ngOnInit(): void {
  }

}
