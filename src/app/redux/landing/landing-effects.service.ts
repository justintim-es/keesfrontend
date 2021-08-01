import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_LANDING_BLOCK_GROW, RDX_LANDING_BLOCK_SHRINK, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_EIGHT, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ELEVEN, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FIVE, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FOUR, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_NINE, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ONE, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SEVEN, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SIX, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TEN, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_THREE, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWELVE, RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWO, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_EIGHT, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ELEVEN, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FIVE, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FOUR, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_NINE, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SEVEN, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SIX, RDX_LANDING_ICON_LEFT_UP_STEP_RESET, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TEN, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_THREE, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWELVE, RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWO, RDX_LANDING_SHOW_BLOCK, RDX_LANDING_SHOW_SUBTITLE, RDX_LANDING_SHOW_TITLE, RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE, rdxLandingAllChargerLink, RDX_LANDING_ALL_CHARGER_LINK, RDX_LANDING_ALL_CHARGER_BLACK, rdxLandingAllChargerBlack, RDX_LANDING_ALL_CHARGER_LEFT, rdxLandingAllChargerLeft, RDX_LANDING_ALL_CHARGER_NORMAL, rdxLandingAllChargerNormal, RDX_LANDING_ALL_CHARGER_RIGHT, rdxLandingAllChargerRight } from './actions';
import { delay, map, mergeMap } from 'rxjs/operators';
import { ANIMATION_TIME_1000, ANIMATION_TIME_250, ANIMATION_TIME_500 } from 'src/app/animations/constants';
@Injectable({
  providedIn: 'root'
})
export class LandingEffectsService {

  constructor(
    private actions: Actions
  ) { }
  showBlock = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_SHOW_BLOCK),
      delay(500),
      map(ac => {
        return {
          type: RDX_LANDING_SHOW_TITLE
        }
      })
    );
  });
  showTitle = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_SHOW_TITLE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_SHOW_SUBTITLE
        }
      })
    )
  })
  showTitle2 = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_SHOW_TITLE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_BLOCK_GROW
        }
      })
    )
  })
  showSubtitle = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_SHOW_SUBTITLE),
      delay(ANIMATION_TIME_1000),
      mergeMap(ac => {
        return [
          {
            type: RDX_LANDING_ALL_CHARGER_LINK
          },
          {
            type: RDX_LANDING_ALL_CHARGER_LEFT
          }
        ];
      })
    );
  });
  blockGrow = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_BLOCK_GROW),
      delay(ANIMATION_TIME_250),
      map(ac => {
        return {
          type: RDX_LANDING_BLOCK_SHRINK
        }
      })
    )
  })
  blockShrink = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_BLOCK_SHRINK),
      delay(ANIMATION_TIME_250),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE
        }
      })
    )
  })
  iconPowerLeftStart = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_LEFT_UP_STEP_RESET),
      delay(100),
      map(ac => {
        return {
            type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE
        };
      })
    );
  });
  iconPowerLeftStepOne = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE),
      delay(ANIMATION_TIME_500),
      mergeMap(ac => {
        return [
          {
            type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWO
          },
          {
            type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ONE
          }
        ];
      })
    );
  });
  iconPowerLeftStepTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWO),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
            type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_THREE
        };
      })
    );
  });
  iconPowerLeftStepThree = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_THREE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FOUR
        }
      })
    )
  })
  iconPowerLeftStepFour = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FOUR),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FIVE
        }
      })
    )
  })
  iconPowerLeftStepFive = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FIVE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SIX
        }
      })
    )
  })
  iconPowerLeftStepSix = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SIX),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SEVEN
        }
      })
    )
  })
  iconPowerLeftStepSeven = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SEVEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_EIGHT
        }
      })
    )
  })
  iconPowerLeftStepEight = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_EIGHT),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_NINE
        }
      })
    )
  })
  iconPowerLeftStepNine = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_NINE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TEN
        }
      })
    )
  })
  iconPowerLeftStepTen = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ELEVEN
        }
      })
    )
  })
  iconPowerLeftStepEleven = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ELEVEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWELVE
        }
      })
    )
  })
  iconBoltLeftStepOne = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ONE),
      delay(ANIMATION_TIME_500),
      mergeMap(ac => {
        return [
          {
            type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWO
          },
          {
            type: RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE
          }
        ];
      })
    );
  })
  iconBoltLeftStepTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWO),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_THREE
        }
      })
    )
  })
  iconBoltLeftStepThree = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_THREE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FOUR
        }
      })
    )
  })
  iconBoltLeftStepFour = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FOUR),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FIVE
        }
      })
    )
  })
  iconBoltLeftStepFive = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FIVE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SIX
        }
      })
    )
  })
  iconBoltLeftStepSix = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SIX),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SEVEN
        }
      })
    )
  })
  iconBoltLeftStepSeven = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SEVEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_EIGHT
        }
      })
    )
  })
  iconBoltLeftStepEight = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_EIGHT),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_NINE
        }
      })
    )
  })
  iconBoltLeftStepNine = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_NINE),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TEN
        }
      })
    )
  })
  iconBoltLeftStepTen = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ELEVEN
        }
      })
    )
  })
  iconBoltLeftStepEleven = createEffect(() => {
    return this.actions.pipe(
      ofType(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ELEVEN),
      delay(ANIMATION_TIME_500),
      map(ac => {
        return {
          type: RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWELVE
        }
      })
    )
  })
  isAllChargerFlikkerLink = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingAllChargerLink),
      delay(500),
      map(ac => {
        return {
          type: RDX_LANDING_ALL_CHARGER_BLACK
        }
      })
    )
  })
  isAllChargerFlikkerBlack = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingAllChargerBlack),
      delay(500),
      map(ac => {
        return {
          type: RDX_LANDING_ALL_CHARGER_LINK
        }
      })
    )
  })
  allChargerLeft = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingAllChargerLeft),
      delay(ANIMATION_TIME_1000),
      map(ac => {
        return {
          type: RDX_LANDING_ALL_CHARGER_NORMAL,
          fromLeft: true
        }
      })
    )
  })
  allChargersNormal = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingAllChargerNormal),
      delay(2000),
      map(ac => {
        if(ac.fromLeft) {
          return {
            type: RDX_LANDING_ALL_CHARGER_RIGHT
          }
        } else {
          return {
            type: RDX_LANDING_ALL_CHARGER_LEFT
          }
        }
      })
    )
  })
  allChargersRight = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingAllChargerRight),
      delay(ANIMATION_TIME_1000),
      map(ac => {
        return {
          type: RDX_LANDING_ALL_CHARGER_NORMAL,
          fromLeft: false
        }
      })
    )
  })
}
