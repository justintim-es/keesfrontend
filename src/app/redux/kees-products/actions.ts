import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { IKeesProduct } from "./interfaces";

export const RDX_KEES_PRODUCTS = 'RDX_KEES_PRODUCTS';
export const RDX_KEES_PRODUCTS_SUCCESS = 'RDX_KEES_PRODUCTS_SUCCESS';
export const RDX_KEES_PRODUCTS_ERROR = 'RDX_KEES_PRODUCTS_ERROR';

export const rdxKeesProducts = createAction(RDX_KEES_PRODUCTS, props<IActionCreator<any>>());
export const rdxKeesProductsSuccess =
createAction(RDX_KEES_PRODUCTS_SUCCESS, props<IActionCreator<IKeesProduct[]>>());
export const rdxKeesProductsError = createAction(RDX_KEES_PRODUCTS_ERROR, props<IActionCreator<any>>());
