import { createReducer } from "@ngrx/store"

export interface ICustomerProductsReducer {
    isCartFetch: boolean;
}
const customerProductsInitial: ICustomerProductsReducer = {
    isCartFetch: false
}
export const customerProductsReducer = createReducer(
  customerProductsInitial
)
