import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { rdxKeesProducts, rdxKeesProductsError, rdxKeesProductsSuccess } from "./actions"
import { IKeesProduct } from "./interfaces"

export interface IKeesProductsReducer {
  isFetch: boolean;
  products: IKeesProduct[];
}
const keesProductsInitial: IKeesProductsReducer = {
    isFetch: false,
    products: []
}
const getKeesProductsFeatureState = createFeatureSelector<IKeesProductsReducer>('keesProducts');

export const getKeesProductsIsFetch = createSelector(
  getKeesProductsFeatureState,
  state => state.isFetch
)

export const getKeesProductsProducts = createSelector(
  getKeesProductsFeatureState,
  state => state.products
)
export const keesProductsReducer = createReducer(
  keesProductsInitial,
  on(rdxKeesProducts, (state): IKeesProductsReducer => {
    return {
      ...state,
      isFetch: true
    }
  }),
  on(rdxKeesProductsSuccess, (state, action): IKeesProductsReducer => {
    return {
      ...state,
      isFetch: false,
      products: action.payload
    }
  }),
  on(rdxKeesProductsError, (state): IKeesProductsReducer => {
    return {
      ...state,
      isFetch: false
    }
  })
)
