import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store"

export interface IBackendReducer {
    backend: string;
}
export const backendInitial: IBackendReducer = {
    backend: 'http://localhost:5000'
}
const getBackendFeatureState = createFeatureSelector<IBackendReducer>('backend');
export const getBackendBackend = createSelector(
  getBackendFeatureState,
  state => state.backend
)
export const backendReducer = createReducer(
  backendInitial,
)
