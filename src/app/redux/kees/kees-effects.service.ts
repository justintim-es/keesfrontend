import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { axiosInstance } from 'src/app/axios-instance';
import { IAction } from '../combiner';
import { RDX_KEES_LOGIN_FETCH, rdxKeesLoginFetch, RDX_KEES_LOGIN_FETCH_SUCCESS, RDX_KEES_LOGIN_FETCH_ERROR } from './actions';

@Injectable({
  providedIn: 'root'
})
export class KeesEffectsService {

  constructor(
    private actions: Actions
  ) { }

  loginFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxKeesLoginFetch),
      switchMap(ac => axiosInstance.post('/api/kees', {
        email: ac.payload.email,
        password: ac.payload.password
      }).then(res => {
        let reschet: IAction<string> = {
          type: RDX_KEES_LOGIN_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        console.log(ac);
        let reschet: IAction<string> = {
          type: RDX_KEES_LOGIN_FETCH_ERROR,
          payload:  err.response?.data,
          component: ac.component
        }
        return reschet;
      }))
    )
  })
}

