import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State, Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { axiosInstance } from 'src/app/axios-instance';
import { IAction, IKeesState } from '../combiner';
import { getKeesToken } from '../kees/reducer';
import { rdxTestImageDelete, rdxTestImageFetch, RDX_TEST_IMAGE_DELETE_ERROR, RDX_TEST_IMAGE_DELETE_SUCCESS, RDX_TEST_IMAGE_FETCH_ERROR, RDX_TEST_IMAGE_FETCH_SUCCESS, RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE } from './actions';

@Injectable({
  providedIn: 'root'
})
export class TestImageEffectsService {

  constructor(
    private actions: Actions,
    private store: Store<State<IKeesState>>
  ) { }
  testImageDelete = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTestImageDelete),
      withLatestFrom(this.store.select(getKeesToken)),
      switchMap(ac => axiosInstance.delete('/api/images', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_TEST_IMAGE_DELETE_SUCCESS,
          imageId: res.data
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_TEST_IMAGE_DELETE_ERROR
        }
      }))
    )
  })
  testImageFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTestImageFetch),
      withLatestFrom(this.store.select(getKeesToken)),
      switchMap(ac => axiosInstance.post('/api/images', ac[0].payload, {
        headers: {
          'Authorization': "Bearer " + ac[1]
        }
      }).then(res => {
        let reschet: IAction<string> = {
          type: RDX_TEST_IMAGE_FETCH_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<any> = {
          type: RDX_TEST_IMAGE_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
        return reschet;
      }))
    )
  })

}
