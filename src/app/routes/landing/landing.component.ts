import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { transformBlockGrowShrink, transformIconLeftUp, transformLandingAllChargers, transformLandingBlock, transformLandingContact, transformLandingSubtitle } from 'src/app/animations/animator';
import { IKeesState } from 'src/app/redux/combiner';
import { RDX_LANDING_SHOW_BLOCK } from 'src/app/redux/landing/actions';
import { getLandingBlockState, getLandingIconBoltStateLeftUp, getLandingIconElectricalServicesLeftUp, getLandingIconPowerStateLeftUp, getLandingIsBlock, getLandingTitleState, getLandingSubtitle, getLandingAllChargerFlikker } from 'src/app/redux/landing/reducer';
import { RDX_TEST_IMAGE_FETCH_SUCCESS } from 'src/app/redux/test-image/actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    transformLandingBlock,
    transformLandingAllChargers,
    transformLandingSubtitle,
    transformBlockGrowShrink,
    transformIconLeftUp,
    transformLandingContact
  ]
})
export class LandingComponent implements OnInit {
  isBlock: Observable<boolean>;
  titleState: Observable<string>;
  isSubtitle: Observable<boolean>;
  blockState: Observable<string>;
  iconPowerStateLeftUp: Observable<string>;
  iconBoltStateLeftUp: Observable<string>;
  iconElectricalServicesStateLeftUp: Observable<string>;
  isFlikker: Observable<boolean>;

  constructor(private store: Store<State<IKeesState>>) {
    this.isBlock = this.store.select(getLandingIsBlock);
    this.titleState = this.store.select(getLandingTitleState);
    this.isSubtitle = this.store.select(getLandingSubtitle);
    this.blockState = this.store.select(getLandingBlockState);
    this.iconPowerStateLeftUp = this.store.select(getLandingIconPowerStateLeftUp);
    this.iconBoltStateLeftUp = this.store.select(getLandingIconBoltStateLeftUp);
    this.iconElectricalServicesStateLeftUp = this.store.select(getLandingIconElectricalServicesLeftUp);
    this.isFlikker = this.store.select(getLandingAllChargerFlikker);
  }
  ngOnInit() {
    this.store.dispatch({ type: RDX_LANDING_SHOW_BLOCK });
  }
}
