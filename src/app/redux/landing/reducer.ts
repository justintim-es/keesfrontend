import { state } from "@angular/animations"
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { ANIMATION_STATE_GROW, ANIMATION_STATE_LEFT, ANIMATION_STATE_LEFT_START, ANIMATION_STATE_LEFT_STEP_EIGHT, ANIMATION_STATE_LEFT_STEP_ELEVEN, ANIMATION_STATE_LEFT_STEP_FIVE, ANIMATION_STATE_LEFT_STEP_FOUR, ANIMATION_STATE_LEFT_STEP_NINE, ANIMATION_STATE_LEFT_STEP_ONE, ANIMATION_STATE_LEFT_STEP_SEVEN, ANIMATION_STATE_LEFT_STEP_SIX, ANIMATION_STATE_LEFT_STEP_TEN, ANIMATION_STATE_LEFT_STEP_THREE, ANIMATION_STATE_LEFT_STEP_TWELVE, ANIMATION_STATE_LEFT_STEP_TWO, ANIMATION_STATE_NORMAL, ANIMATION_STATE_RIGHT } from "src/app/animations/constants";
import { rdxLandingBlockGrow, rdxLandingBlockShrink, rdxLandingIconPowerLeftUpStepFive, rdxLandingIconPowerLeftUpStepFour, rdxLandingIconPowerLeftUpStepOne, rdxLandingIconPowerLeftUpStepSeven, rdxLandingIconPowerLeftUpStepTwo, rdxLandingShowBlock, rdxLandingShowSubtitle, rdxLandingShowTitle, rdxLandingIconPowerLeftUpStepThree, rdxLandingIconPowerLeftUpStepSix, rdxLandingIconPowerLeftUpStepEight, rdxLandingIconPowerLeftUpStepNine, rdxLandingIconPowerLeftUpStepEleven, rdxLandingIconPowerLeftUpStepTen, rdxLandingIconPowerLeftUpStepTwelve, rdxLandingIconBoltLeftUpStepOne, rdxLandingIconBoltLeftUpStepTwo, rdxLandingIconBoltLeftUpStepThree, rdxLandingIconBoltLeftUpStepFour, rdxLandingIconBoltLeftUpStepFive, rdxLandingIconBoltLeftUpStepSix, rdxLandingIconBoltLeftUpStepSeven, rdxLandingIconBoltLeftUpStepEight, rdxLandingIconBoltLeftUpStepNine, rdxLandingIconBoltLeftUpStepTen, rdxLandingIconBoltLeftUpStepEleven, rdxLandingIconBoltLeftUpStepTwelve, rdxLandingIconElectricalServicesLeftUpStepOne, rdxLandingIconElectricalServicesLeftUpStepEight, rdxLandingIconElectricalServicesLeftUpStepEleven, rdxLandingIconElectricalServicesLeftUpStepFive, rdxLandingIconElectricalServicesLeftUpStepFour, rdxLandingIconElectricalServicesLeftUpStepNine, rdxLandingIconElectricalServicesLeftUpStepSeven, rdxLandingIconElectricalServicesLeftUpStepSix, rdxLandingIconElectricalServicesLeftUpStepTen, rdxLandingIconElectricalServicesLeftUpStepThree, rdxLandingIconElectricalServicesLeftUpStepTwelve, rdxLandingIconElectricalServicesLeftUpStepTwo, rdxLandingIconPowerLeftUpStepReset, rdxLandingAllChargerBlack, rdxLandingAllChargerLink, rdxLandingAllChargerLeft, rdxLandingAllChargerRight, rdxLandingAllChargerNormal } from "./actions"

export interface ILandingReducer {
    isBlock: boolean;
    titleState: string;
    isSubtitle: boolean;
    blockState: string;
    iconPowerStateLeftUp: string;
    iconBoltStateLeftUp: string;
    iconElectricalServicesStateLeftUp: string;
    isAllChargerFlikker: boolean;
}
const landingInitial: ILandingReducer = {
    isBlock: false,
    titleState: ANIMATION_STATE_RIGHT,
    isSubtitle: false,
    blockState: ANIMATION_STATE_NORMAL,
    iconPowerStateLeftUp: ANIMATION_STATE_LEFT_START,
    iconBoltStateLeftUp: ANIMATION_STATE_LEFT_START,
    iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_START,
    isAllChargerFlikker: false
}
const getLandingFeatureState = createFeatureSelector<ILandingReducer>('landing');

export const getLandingIsBlock = createSelector(
  getLandingFeatureState,
  state => state.isBlock
);
export const getLandingTitleState = createSelector(
  getLandingFeatureState,
  state => state.titleState
);
export const getLandingSubtitle = createSelector(
  getLandingFeatureState,
  state => state.isSubtitle
);
export const getLandingBlockState = createSelector(
  getLandingFeatureState,
  state => state.blockState
);
export const getLandingIconPowerStateLeftUp = createSelector(
  getLandingFeatureState,
  state => state.iconPowerStateLeftUp
);
export const getLandingIconBoltStateLeftUp = createSelector(
  getLandingFeatureState,
  state => state.iconBoltStateLeftUp
);
export const getLandingIconElectricalServicesLeftUp = createSelector(
  getLandingFeatureState,
  state => state.iconElectricalServicesStateLeftUp
);
export const getLandingAllChargerFlikker = createSelector(
  getLandingFeatureState,
  state => state.isAllChargerFlikker
);

export const landingReducer = createReducer<ILandingReducer>(
  landingInitial,
  on(rdxLandingShowBlock, (state): ILandingReducer => {
    return {
      ...state,
      isBlock: true
    };
  }),
  on(rdxLandingShowTitle, (state): ILandingReducer => {
    return {
      ...state,
      titleState: ANIMATION_STATE_NORMAL
    }
  }),
  on(rdxLandingShowSubtitle, (state): ILandingReducer => {
    return {
      ...state,
      isSubtitle: true
    }
  }),
  on(rdxLandingBlockGrow, (state): ILandingReducer => {
    return {
      ...state,
      blockState: ANIMATION_STATE_GROW
    }
  }),
  on(rdxLandingBlockShrink, (state): ILandingReducer => {
    return {
      ...state,
      blockState: ANIMATION_STATE_NORMAL
    }
  }),
  on(rdxLandingIconPowerLeftUpStepReset, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_START,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_START,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_START
    }
  }),
  on(rdxLandingIconPowerLeftUpStepOne, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_ONE
    }
  }),
  on(rdxLandingIconPowerLeftUpStepTwo, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_TWO
    }
  }),
  on(rdxLandingIconPowerLeftUpStepThree, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_THREE
    }
  }),
  on(rdxLandingIconPowerLeftUpStepFour, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_FOUR
    }
  }),
  on(rdxLandingIconPowerLeftUpStepFive, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_FIVE
    }
  }),
  on(rdxLandingIconPowerLeftUpStepSix, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_SIX
    }
  }),
  on(rdxLandingIconPowerLeftUpStepSeven, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_SEVEN
    }
  }),
  on(rdxLandingIconPowerLeftUpStepEight, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_EIGHT
    }
  }),
  on(rdxLandingIconPowerLeftUpStepNine, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_NINE
    }
  }),
  on(rdxLandingIconPowerLeftUpStepTen, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_TEN
    }
  }),
  on(rdxLandingIconPowerLeftUpStepEleven, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_ELEVEN
    }
  }),
  on(rdxLandingIconPowerLeftUpStepTwelve, (state): ILandingReducer => {
    return {
      ...state,
      iconPowerStateLeftUp: ANIMATION_STATE_LEFT_STEP_TWELVE
    }
  }),
  on(rdxLandingIconBoltLeftUpStepOne, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_ONE
    }
  }),
  on(rdxLandingIconBoltLeftUpStepTwo, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_TWO
    }
  }),
  on(rdxLandingIconBoltLeftUpStepThree, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_THREE
    }
  }),
  on(rdxLandingIconBoltLeftUpStepFour, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_FOUR
    }
  }),
  on(rdxLandingIconBoltLeftUpStepFive, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_FIVE
    }
  }),
  on(rdxLandingIconBoltLeftUpStepSix, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_SIX
    }
  }),
  on(rdxLandingIconBoltLeftUpStepSeven, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_SEVEN
    }
  }),
  on(rdxLandingIconBoltLeftUpStepEight, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_EIGHT
    }
  }),
  on(rdxLandingIconBoltLeftUpStepNine, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_NINE
    }
  }),
  on(rdxLandingIconBoltLeftUpStepTen, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_TEN
    }
  }),
  on(rdxLandingIconBoltLeftUpStepEleven, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_ELEVEN
    }
  }),
  on(rdxLandingIconBoltLeftUpStepTwelve, (state): ILandingReducer => {
    return {
      ...state,
      iconBoltStateLeftUp: ANIMATION_STATE_LEFT_STEP_TWELVE
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepOne, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_ONE
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepTwo, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_TWO
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepThree, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_THREE
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepFour, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_FOUR
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepFive, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_FIVE
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepSix, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_SIX
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepSeven, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_SEVEN
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepEight, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_EIGHT
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepNine, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_NINE
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepTen, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_TEN
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepEleven, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_ELEVEN
    }
  }),
  on(rdxLandingIconElectricalServicesLeftUpStepTwelve, (state): ILandingReducer => {
    return {
      ...state,
      iconElectricalServicesStateLeftUp: ANIMATION_STATE_LEFT_STEP_TWELVE
    }
  }),
  on(rdxLandingAllChargerBlack, (state): ILandingReducer => {
    return {
      ...state,
      isAllChargerFlikker: false
    }
  }),
  on(rdxLandingAllChargerLink, (state): ILandingReducer => {
    return {
      ...state,
      isAllChargerFlikker: true
    }
  }),
  on(rdxLandingAllChargerLeft, (state): ILandingReducer => {
    return {
      ...state,
      titleState: ANIMATION_STATE_LEFT
    }
  }),
  on(rdxLandingAllChargerRight, (state): ILandingReducer => {
    return {
      ...state,
      titleState: ANIMATION_STATE_RIGHT
    }
  }),
  on(rdxLandingAllChargerNormal, (state): ILandingReducer => {
    return {
      ...state,
      titleState: ANIMATION_STATE_NORMAL
    }
  })
);
