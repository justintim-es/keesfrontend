import { createFeatureSelector } from "@ngrx/store";
import { IKeesReducer } from "./kees/reducer";
import { ILandingReducer } from "./landing/reducer";
import { ITestImageReducer } from "./test-image/reducer";

export interface IKeesState {
  landing: ILandingReducer;
  kees: IKeesReducer;
  testImage: ITestImageReducer;
}
export interface IAction<T> {
  type: string;
  payload: T;
  component: string;
}
export interface IActionCreator<T> {
  payload: T;
  component: string;
}
