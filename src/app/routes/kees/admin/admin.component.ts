import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAction, IKeesState } from 'src/app/redux/combiner';
import { rdxKeesProducts, RDX_KEES_PRODUCTS } from 'src/app/redux/kees-products/actions';
import { IKeesReducer } from 'src/app/redux/kees/reducer';
import { RDX_TEST_IMAGE_DELETE } from 'src/app/redux/test-image/actions';
import { getTestImageIsChargerDelete, getTestImageIsShowUpload } from 'src/app/redux/test-image/reducer';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isShowUpload: Observable<boolean>;
  isChargerDelete: Observable<boolean>;
  constructor(
    private store: Store<State<IKeesState>>) {
    this.isShowUpload = this.store.select(getTestImageIsShowUpload);
    this.isChargerDelete = this.store.select(getTestImageIsChargerDelete)
   }

  ngOnInit(): void {
    this.store.dispatch({ type: RDX_TEST_IMAGE_DELETE });
    this.store.dispatch<IAction<any>>({
      type: RDX_KEES_PRODUCTS,
      payload: null,
      component: 'admin'
    });
  }
}
