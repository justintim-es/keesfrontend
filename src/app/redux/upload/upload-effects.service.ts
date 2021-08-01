import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, State, Store } from '@ngrx/store';
import axios, { AxiosError } from 'axios';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { axiosInstance } from 'src/app/axios-instance';
import { IAction, IKeesState } from '../combiner';
import { RDX_KEES_PRODUCTS } from '../kees-products/actions';
import { getKeesToken } from '../kees/reducer';
import { RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE } from '../test-image/actions';
import { getTestImageImageId } from '../test-image/reducer';
import { rdxUploadFetch, rdxUploadFetchSuccess, RDX_UPLOAD_FETCH_ERROR, RDX_UPLOAD_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class UploadEffectsService {

  constructor(
    private actions: Actions,
    private store: Store<State<IKeesState>>
  ) { }

  uploadFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxUploadFetch),
      withLatestFrom(this.store.select(getTestImageImageId), this.store.select(getKeesToken)),
      switchMap(ac => axiosInstance.post('/api/products', {
        title: ac[0].payload.title,
        price: ac[0].payload.price,
        description: ac[0].payload.description,
        imageId: ac[1]
      }, {
        headers: {
          'Authorization': 'Bearer ' + ac[2]
        }
      }).then(res => {
        let reschet: IAction<null> = {
          type: RDX_UPLOAD_FETCH_SUCCESS,
          payload: null,
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<any> = {
          type: RDX_UPLOAD_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
        return reschet;
      }))
    )
  })
  testImagefetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxUploadFetchSuccess),
      mergeMap(ac => {
        return [
          {
            type: RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE
          },
          {
            type: RDX_KEES_PRODUCTS,
          }
        ];
      })
    )
  })
}
