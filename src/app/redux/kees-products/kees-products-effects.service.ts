import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError, AxiosResponse } from 'axios';
import { switchMap } from 'rxjs/operators';
import { axiosInstance } from 'src/app/axios-instance';
import { IAction } from '../combiner';
import { rdxKeesProducts, RDX_KEES_PRODUCTS_ERROR, RDX_KEES_PRODUCTS_SUCCESS } from './actions';
import { IKeesProduct } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class KeesProductsEffectsService {

  constructor(
    private actions: Actions
  ) { }

  keesProducts = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxKeesProducts),
      switchMap(ac => axiosInstance.get('/api/products').then((res: AxiosResponse<IKeesProduct[]>) => {
        let reschet: IAction<IKeesProduct[]> = {
          type: RDX_KEES_PRODUCTS_SUCCESS,
          payload: res.data,
          component: ac.component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<any> = {
          type: RDX_KEES_PRODUCTS_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
        return reschet;
      }))
    )
  })
}
