import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { IKeesState } from '../redux/combiner';
import { getKeesToken } from '../redux/kees/reducer';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  token: string;

  constructor(
    private router: Router,
    private store: Store<State<IKeesState>>
  ) {
    this.token = '';
    this.store.select(getKeesToken).subscribe(res => {
      this.token = res;
    });

  }

  canActivate() {
    if (this.token != '') {
      return true;
    } else {
      this.router.navigate(['/kees']);
      return false;
    }
  }
}
