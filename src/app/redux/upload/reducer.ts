import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { rdxUploadFetch, rdxUploadFetchError, rdxUploadFetchSuccess } from "./actions";

interface IUploadReducer {
    isFetch: boolean;
    isFetchError: boolean;
    fetchError: any;
}
export const uploadInitial: IUploadReducer = {
    isFetch: false,
    isFetchError: false,
    fetchError: ''
}
export const getUploadFeatureState = createFeatureSelector<IUploadReducer>('upload');

export const getUploadIsFetch = createSelector(
  getUploadFeatureState,
  state => state.isFetch
);
export const getUploadIsFetchError = createSelector(
  getUploadFeatureState,
  state => state.isFetchError
);
export const getUploadFetchError = createSelector(
  getUploadFeatureState,
  state => state.fetchError
);
export const uploadReducer = createReducer(
  uploadInitial,
  on(rdxUploadFetch, (state): IUploadReducer => {
    return {
      ...state,
      isFetch: true,
      isFetchError: false,
    }
  }),
  on(rdxUploadFetchSuccess, (state): IUploadReducer => {
    return {
      ...state,
      isFetch: false
    }
  }),
  on(rdxUploadFetchError, (state, action): IUploadReducer => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload
    }
  })
)
