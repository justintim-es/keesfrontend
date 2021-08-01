import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { getBackendBackend } from 'src/app/redux/backend/reducer';
import { IAction, IKeesState } from 'src/app/redux/combiner';
import { RDX_TEST_IMAGE_DELETE, RDX_TEST_IMAGE_FETCH, RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE } from 'src/app/redux/test-image/actions';
import { getTestImageImageId, getTestImageIsChargerFetch, getTestImageIsDisplayImage } from 'src/app/redux/test-image/reducer';
import { IUploadFetch, RDX_UPLOAD_FETCH } from 'src/app/redux/upload/actions';
import { getUploadFetchError, getUploadIsFetch, getUploadIsFetchError } from 'src/app/redux/upload/reducer';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
  fileName: string;
  formData: FormData;
  isDisplayImage: Observable<boolean>;
  isChargerFetch: Observable<boolean>;
  title: string;
  price: number;
  eurosValue: number;
  centsValue: number;
  description: string;
  imageId: Observable<string>;
  fetchError: Observable<any>;
  isUploadFetch: Observable<boolean>;
  backend: Observable<string>;
  titleFormControl: FormControl;
  priceFormControl: FormControl;
  descriptionFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  fetchErrorSubscription: SubscriptionLike;
  constructor(
    private store: Store<State<IKeesState>>,
    private elementRef: ElementRef<HTMLInputElement>) {
      this.fileInput = elementRef;
      this.fileName = '';
      this.formData = new FormData();
      this.isDisplayImage = this.store.select(getTestImageIsDisplayImage);
      this.isChargerFetch = this.store.select(getTestImageIsChargerFetch);
      this.title = 'Title';
      this.price = 0;
      this.eurosValue = 0;
      this.centsValue = 0;
      this.description = 'info info info info info';
      this.imageId = this.store.select(getTestImageImageId);
      this.fetchError = this.store.select(getUploadFetchError);
      this.isUploadFetch = this.store.select(getUploadIsFetch);
      this.backend = this.store.select(getBackendBackend);
      this.titleFormControl = new FormControl('', [
        Validators.required
      ]);
      this.priceFormControl = new FormControl('', [
        Validators.required
      ])
      this.descriptionFormControl = new FormControl('', [
        Validators.required
      ]);
      this.errorStateMatcher = new MyErrorStateMatcher();
      this.fetchErrorSubscription = this.store.select(getUploadIsFetchError).subscribe(res => {
        if (res) {
          this.descriptionFormControl.setErrors({ backend: true })
        }
      })
    }

  ngOnInit(): void {

  }
  imageChange(e: any) {
    this.fileName = e.target.files[0].name
    this.formData.append('file', this.fileInput.nativeElement.files![this.fileInput.nativeElement.files!.length - 1]);
    this.store.dispatch<IAction<FormData>>({
      type: RDX_TEST_IMAGE_FETCH,
      payload: this.formData,
      component: 'test-image'
    });
    this.formData = new FormData();
    this.fileInput.nativeElement.value = "";
  }
  upload() {
    this.price = parseFloat(((this.eurosValue) ? this.eurosValue : 0) + '.' + ((this.centsValue) ? this.centsValue : '00'));
    if (
      !this.priceFormControl.hasError('required') &&
      !this.titleFormControl.hasError('required') &&
      !this.descriptionFormControl.hasError('required') )
    this.store.dispatch<IAction<IUploadFetch>>({
      type: RDX_UPLOAD_FETCH,
      payload: {
        price: this.price,
        title: this.title,
        description: this.description
      },
      component: 'test-image'
    });
    this.fileName = '';
  }
  cancel() {
    this.fileName = '';
    this.formData = new FormData();
    this.fileInput.nativeElement.value = "";
    this.store.dispatch({ type: RDX_TEST_IMAGE_IS_DISPLAY_IMAGE_FALSE });
  }

}
