import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, IKeesState } from 'src/app/redux/combiner';
import { ILoginFetch, RDX_KEES_LOGIN_FETCH } from 'src/app/redux/kees/actions';
import { getKeesFetchErrorMessage, getKeesIsFetch, getKeesIsFetchError, getKeesIsFetchSuccess } from 'src/app/redux/kees/reducer';

@Component({
  selector: 'app-kees',
  templateUrl: './kees.component.html',
  styleUrls: ['./kees.component.css']
})
export class KeesComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  fetchErrorMessage: Observable<string>;
  isFetch: Observable<boolean>;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  formSubscription: SubscriptionLike;
  routeSubscription: SubscriptionLike;
  constructor(private store: Store<State<IKeesState>>, private router: Router) {
    this.email = '';
    this.password = '';
    this.fetchErrorMessage = this.store.select(getKeesFetchErrorMessage);
    this.isFetch = this.store.select(getKeesIsFetch);
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.formSubscription = this.store.select(getKeesIsFetchError).subscribe(res => {
      if (res) {
        this.emailFormControl.setErrors({ backend: true });
        this.passwordFormControl.setErrors({ backend: true })
      }
    })
    this.routeSubscription = this.store.select(getKeesIsFetchSuccess).subscribe(res => {
      if (res) {
        console.log('ajsfhjahsf');
        this.router.navigate(['/kees/admin']);
      }
    })
  }

  ngOnInit(): void {
  }
  submit() {
    this.store.dispatch<IAction<ILoginFetch>>({
      type: RDX_KEES_LOGIN_FETCH,
      payload: {
        email: this.email,
        password: this.password
      },
      component: 'kees'
    });
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
