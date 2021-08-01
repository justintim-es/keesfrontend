import { createAction, props } from "@ngrx/store";
import { IAction, IActionCreator } from "../combiner";

export const RDX_KEES_LOGIN_FETCH = 'RDX_KEES_LOGIN_FETCH';
export const RDX_KEES_LOGIN_FETCH_SUCCESS = 'RDX_KEES_LOGIN_FETCH_SUCCESS';
export const RDX_KEES_LOGIN_FETCH_ERROR = 'RDX_KEES_LOGIN_FETCH_ERROR';
export interface ILoginFetch {
  email: string;
  password: string;
}
export const rdxKeesLoginFetch = createAction(
  RDX_KEES_LOGIN_FETCH,
  props<IActionCreator<ILoginFetch>>()
);
export const rdxKeesLoginFetchSuccess = createAction(
  RDX_KEES_LOGIN_FETCH_SUCCESS,
  props<IActionCreator<string>>()
);
export const rdxKeesLoginFetchError = createAction(
  RDX_KEES_LOGIN_FETCH_ERROR,
  props<IActionCreator<string>>()
);
