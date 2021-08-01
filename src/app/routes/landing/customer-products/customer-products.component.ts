import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { transformProductsProductDescription, transformProductsProductImage, transformProductsProductTitle } from 'src/app/animations/animator';
import { getBackendBackend } from 'src/app/redux/backend/reducer';
import { IAction, IKeesState } from 'src/app/redux/combiner';
import { RDX_KEES_PRODUCTS } from 'src/app/redux/kees-products/actions';
import { IKeesProduct } from 'src/app/redux/kees-products/interfaces';
import { getKeesProductsIsFetch, getKeesProductsProducts } from 'src/app/redux/kees-products/reducer';

@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css'],
  animations: [
    transformProductsProductImage,
    transformProductsProductDescription,
    transformProductsProductTitle
  ]
})
export class CustomerProductsComponent implements OnInit {
  isFetch: Observable<boolean>;
  backend: Observable<string>;
  products: Observable<IKeesProduct[]>;
  constructor(
    private store: Store<State<IKeesState>>
  ) {
    this.isFetch = this.store.select(getKeesProductsIsFetch);
    this.backend = this.store.select(getBackendBackend);
    this.products = this.store.select(getKeesProductsProducts)
  }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_KEES_PRODUCTS,
      payload: null,
      component: 'customer-products'
    })
  }

}
