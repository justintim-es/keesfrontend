import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_TEST_IMAGE_DELETE = 'RDX_TEST_IMAGE_DELETE';
export const RDX_TEST_IMAGE_DELETE_SUCCESS = 'RDX_TEST_IMAGE_DELETE_SUCCESS';
export const RDX_TEST_IMAGE_DELETE_ERROR = 'RDX_TEST_IMAGE_DELETE_ERROR';

export const RDX_TEST_IMAGE_FETCH = 'RDX_TEST_IMAGE_FETCH';
export const RDX_TEST_IMAGE_FETCH_SUCCESS = 'RDX_TEST_IMAGE_FETCH_SUCCESS';
export const RDX_TEST_IMAGE_FETCH_ERROR = 'RDX_TEST_IMAGE_FETCH_ERROR';

export const RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE = 'RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE';

export const rdxTestImageDelete =
createAction(RDX_TEST_IMAGE_DELETE);

export const rdxTestImageDeleteSuccess =
createAction(RDX_TEST_IMAGE_DELETE_SUCCESS);

export const rdxTestImageDeleteError =
createAction(RDX_TEST_IMAGE_DELETE_ERROR);

export const rdxTestImageFetch = createAction(
  RDX_TEST_IMAGE_FETCH,
  props<IActionCreator<FormData>>()
);
export const rdxTestImageFetchSuccess =
createAction(RDX_TEST_IMAGE_FETCH_SUCCESS, props<IActionCreator<string>>());
export const rdxTestImageFetchError =
createAction(
  RDX_TEST_IMAGE_FETCH_ERROR,
  props<IActionCreator<any>>()
);

export const rdxTestImageIsDisplayImageFalse = createAction(RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE);
