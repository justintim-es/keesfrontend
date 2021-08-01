import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_UPLOAD_FETCH = 'RDX_UPLOAD_FETCH';
export const RDX_UPLOAD_FETCH_SUCCESS = 'RDX_UPLOAD_FETCH_SUCCESS';
export const RDX_UPLOAD_FETCH_ERROR = 'RDX_UPLOAD_FETCH_ERROR';

export interface IUploadFetch {
  title: string;
  price: number;
  description: string;
}

export const rdxUploadFetch = createAction(RDX_UPLOAD_FETCH, props<IActionCreator<IUploadFetch>>());
export const rdxUploadFetchSuccess = createAction(RDX_UPLOAD_FETCH_SUCCESS);
export const rdxUploadFetchError = createAction(RDX_UPLOAD_FETCH_ERROR, props<IActionCreator<any>>());
