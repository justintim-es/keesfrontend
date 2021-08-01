import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { ANIMATION_TIME_500 } from 'src/app/animations/constants';
import { RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWO, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_THREE, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FOUR, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FIVE, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SIX, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SEVEN, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_EIGHT, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_NINE, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TEN, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ELEVEN, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWELVE, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE, RDX_LANDING_ICON_LEFT_UP_STEP_RESET } from './actions';

@Injectable({
  providedIn: 'root'
})
export class LandingEffectsElectricalServicesService {

  constructor(
    private actions: Actions
  ) { }
  iconElectricalServicesLeftStepOne = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWO
        }
      })
    )
  })
  iconElectricalServicesLeftStepTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWO),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_THREE
        }
      })
    )
  })
  iconElectricalServicesLeftStepThree = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_THREE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FOUR
        }
      })
    )
  })
  iconElectricalServicesLeftStepFour = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FOUR),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FIVE
        }
      })
    )
  })
  iconElectricalServicesLeftStepFive = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FIVE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SIX
        }
      })
    )
  })
  iconElectricalServicesLeftStepSix = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SIX),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SEVEN
        }
      })
    )
  })
  iconElectricalServicesLeftStepSeven = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SEVEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_EIGHT
        }
      })
    )
  })
  iconElectricalServicesLeftStepEight = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_EIGHT),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_NINE
        }
      })
    )
  })
  iconElectricalServicesLeftStepNine = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_NINE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TEN
        }
      })
    )
  })
  iconElectricalServicesLeftStepTen = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ELEVEN
        }
      })
    )
  })
  iconElectricalServicesLeftStepEleven = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ELEVEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWELVE
        }
      })
    )
  })
  iconElectricalServicesLeftStepTwelve = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWELVE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_LEFT_UP_STEP_RESET
        }
      })
    )
  })
}
