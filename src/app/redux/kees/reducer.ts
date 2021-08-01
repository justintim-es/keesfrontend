import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { rdxKeesLoginFetch, rdxKeesLoginFetchError, rdxKeesLoginFetchSuccess } from "./actions"

export interface IKeesReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    token: string;
}
const keesInitial: IKeesReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  token: ''
}
const getKeesFeatureState = createFeatureSelector<IKeesReducer>('kees');

export const getKeesIsFetch = createSelector(
  getKeesFeatureState,
  state => state.isFetch
);
export const getKeesIsFetchSuccess = createSelector(
  getKeesFeatureState,
  state => state.isFetchSuccess
)
export const getKeesIsFetchError = createSelector(
  getKeesFeatureState,
  state => state.isFetchError
);
export const getKeesFetchErrorMessage = createSelector(
  getKeesFeatureState,
  state => state.fetchErrorMessage
);
export const getKeesToken = createSelector(
  getKeesFeatureState,
  state => state.token
)

export const keesReducer = createReducer<IKeesReducer>(
  keesInitial,
  on(rdxKeesLoginFetch, (state): IKeesReducer => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
    }
  }),
  on(rdxKeesLoginFetchSuccess, (state, action): IKeesReducer => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      token: action.payload
    }
  }),
  on(rdxKeesLoginFetchError, (state, action): IKeesReducer => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload
    }
  })
)
