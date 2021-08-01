import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { ICartFetch } from "./interfaces";

export const RDX_CUSTOMER_PRODUCTS_CART_FETCH = 'RDX_CUSTOMER_PRODUCTS_CART_FETCH';
export const RDX_CUSTOMER_PRODUCTS_CART_FETCH_SUCCESS = 'RDX_CUSTOMER_PRODUCTS_CART_FETCH_SUCCESS';
export const RDX_CUSTOMER_PRODUCTS_CART_FETCH_ERROR = 'RDX_CUSTOMER_PRODUCTS_CART_FETCH_ERROR';

export const rdxCustomerProductsCartFetch =
createAction(
  RDX_CUSTOMER_PRODUCTS_CART_FETCH,
  props<IActionCreator<ICartFetch>>()
);
export const rdxCustomerProductsCartFetchSuccess =
createAction(
  RDX_CUSTOMER_PRODUCTS_CART_FETCH_SUCCESS,
  props<IActionCreator<any>>()
);
export const rdxCustomerProductsCartFetchError =
createAction(
  RDX_CUSTOMER_PRODUCTS_CART_FETCH_ERROR,
  props<IActionCreator<any>>()
);
