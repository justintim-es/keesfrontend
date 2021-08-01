import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { REDUX_DEVTOOLS_EXTENSION } from '@ngrx/store-devtools/src/extension';
import { Observable } from 'rxjs';
import { transformLandingAllChargers, transformLandingBlock, transformLandingSubtitle } from './animations/animator';
import { IKeesState } from './redux/combiner';
import { RDX_LANDING_SHOW_BLOCK } from './redux/landing/actions';
import { getLandingIsBlock, getLandingSubtitle } from './redux/landing/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    transformLandingBlock,
    transformLandingAllChargers,
    transformLandingSubtitle,
  ]
})
export class AppComponent  {
  title = 'frontend';

}
