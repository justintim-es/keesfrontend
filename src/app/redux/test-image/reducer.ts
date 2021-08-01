import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { rdxTestImageDelete, rdxTestImageDeleteError, rdxTestImageDeleteSuccess, rdxTestImageFetch, rdxTestImageFetchError, rdxTestImageFetchSuccess, rdxTestImageIsDisplayImageFalse } from "./actions"

export interface ITestImageReducer {
  isChargerDelete: boolean;
  isShowUpload: boolean;
  isDisplayImage: boolean;
  isChargerFetch: boolean;
  imageId: string;
  fetchErrorMessage: any;
}
export const testImageInitial: ITestImageReducer = {
  isChargerDelete: false,
  isShowUpload: false,
  isDisplayImage: false,
  isChargerFetch: false,
  imageId: '',
  fetchErrorMessage: null,
}
export const getTestImageFeatureState = createFeatureSelector<ITestImageReducer>('testImage');

export const getTestImageIsShowUpload = createSelector(
  getTestImageFeatureState,
  state => state.isShowUpload
);
export const getTestImageIsDisplayImage = createSelector(
  getTestImageFeatureState,
  state => state.isDisplayImage
);
export const getTestImageIsChargerDelete = createSelector(
  getTestImageFeatureState,
  state => state.isChargerDelete
);
export const getTestImageIsChargerFetch = createSelector(
  getTestImageFeatureState,
  state => state.isChargerFetch
);
export const getTestImageImageId = createSelector(
  getTestImageFeatureState,
  state => state.imageId
)
export const testImageReducer = createReducer(
  testImageInitial,
  on(rdxTestImageDelete, (state): ITestImageReducer => {
    return {
      ...state,
      isChargerDelete: true,
      isShowUpload: false,
    }
  }),
  on(rdxTestImageDeleteSuccess, (state): ITestImageReducer => {
    return {
      ...state,
      isChargerDelete: false,
      isShowUpload: true
    }
  }),
  on(rdxTestImageDeleteError, (state): ITestImageReducer => {
    return {
      ...state,
      isChargerDelete: false
    }
  }),
  on(rdxTestImageFetch, (state): ITestImageReducer => {
    return {
      ...state,
      isChargerFetch: true,
      isDisplayImage: false
    }
  }),
  on(rdxTestImageFetchSuccess, (state, action): ITestImageReducer => {
    return {
      ...state,
      isChargerFetch: false,
      isDisplayImage: true,
      imageId: action.payload
    }
  }),
  on(rdxTestImageFetchError, (state, action): ITestImageReducer => {
    return {
      ...state,
      isChargerFetch: false,
      fetchErrorMessage: action.payload
    }
  }),
  on(rdxTestImageIsDisplayImageFalse, (state): ITestImageReducer => {
    return {
      ...state,
      isDisplayImage: false
    }
  })
)
