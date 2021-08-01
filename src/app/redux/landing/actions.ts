import { createPlatformFactory } from "@angular/core";
import { createAction, props } from "@ngrx/store";

export const RDX_LANDING_SHOW_BLOCK = 'RDX_LANDING_SHOW_BLOCK';
export const RDX_LANDING_SHOW_TITLE = 'RDX_LANDING_SHOW_TITLE';
export const RDX_LANDING_SHOW_SUBTITLE = 'RDX_LANDING_SHOW_SUBTITLE';

export const RDX_LANDING_BLOCK_GROW = 'RDX_LANDING_BLOCK_GROW';
export const RDX_LANDING_BLOCK_SHRINK = 'RDX_LANDING_BLOCK_SHRINK';

export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWO = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWO';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_THREE = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_THREE';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FOUR = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FOUR';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FIVE = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FIVE';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SIX = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SIX';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SEVEN = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SEVEN';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_EIGHT = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_EIGHT';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_NINE = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_NINE';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TEN = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TEN';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ELEVEN = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ELEVEN';
export const RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWELVE = 'RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWELVE';

export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ONE = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ONE';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWO = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWO';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_THREE = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_THREE';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FOUR = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FOUR';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FIVE = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FIVE';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SIX = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SIX';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SEVEN = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SEVEN';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_EIGHT = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_EIGHT';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_NINE = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_NINE';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TEN = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TEN';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ELEVEN = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ELEVEN';
export const RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWELVE = 'RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWELVE';

export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWO = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWO';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_THREE = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_THREE';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FOUR = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FOUR';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FIVE = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FIVE';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SIX = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SIX';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SEVEN = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SEVEN';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_EIGHT = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_EIGHT';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_NINE = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_NINE';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TEN = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TEN';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ELEVEN = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ELEVEN';
export const RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWELVE = 'RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWELVE';

export const RDX_LANDING_ICON_LEFT_UP_STEP_RESET = 'RDX_LANDING_ICON_LEFT_UP_STEP_RESET';

export const RDX_LANDING_ALL_CHARGER_LINK = 'RDX_LANDING_ALL_CHARGER_LINK';
export const RDX_LANDING_ALL_CHARGER_BLACK = 'RDX_LANDING_ALL_CHARGER_BLACK';

export const RDX_LANDING_ALL_CHARGER_LEFT = 'RDX_LANDING_ALL_CHARGER_LEFT';
export const RDX_LANDING_ALL_CHARGER_NORMAL = 'RDX_LANDING_ALL_CHARGER_NORMAL';
export const RDX_LANDING_ALL_CHARGER_RIGHT = 'RDX_LANDING_ALL_CHARGER_RIGHT';




export const rdxLandingShowBlock = createAction(RDX_LANDING_SHOW_BLOCK);
export const rdxLandingShowTitle = createAction(RDX_LANDING_SHOW_TITLE);
export const rdxLandingShowSubtitle = createAction(RDX_LANDING_SHOW_SUBTITLE);

export const rdxLandingBlockGrow = createAction(RDX_LANDING_BLOCK_GROW);
export const rdxLandingBlockShrink = createAction(RDX_LANDING_BLOCK_SHRINK);

export const rdxLandingIconPowerLeftUpStepReset = createAction(RDX_LANDING_ICON_LEFT_UP_STEP_RESET);
export const rdxLandingIconPowerLeftUpStepOne = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ONE);
export const rdxLandingIconPowerLeftUpStepTwo = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWO);
export const rdxLandingIconPowerLeftUpStepThree = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_THREE);
export const rdxLandingIconPowerLeftUpStepFour = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FOUR);
export const rdxLandingIconPowerLeftUpStepFive = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_FIVE);
export const rdxLandingIconPowerLeftUpStepSix = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SIX);
export const rdxLandingIconPowerLeftUpStepSeven = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_SEVEN);
export const rdxLandingIconPowerLeftUpStepEight = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_EIGHT);
export const rdxLandingIconPowerLeftUpStepNine = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_NINE);
export const rdxLandingIconPowerLeftUpStepTen = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TEN);
export const rdxLandingIconPowerLeftUpStepEleven = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_ELEVEN);
export const rdxLandingIconPowerLeftUpStepTwelve = createAction(RDX_LANDING_ICON_POWER_LEFT_UP_STEP_TWELVE);

export const rdxLandingIconBoltLeftUpStepOne = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ONE);
export const rdxLandingIconBoltLeftUpStepTwo = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWO);
export const rdxLandingIconBoltLeftUpStepThree = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_THREE);
export const rdxLandingIconBoltLeftUpStepFour = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FOUR);
export const rdxLandingIconBoltLeftUpStepFive = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_FIVE);
export const rdxLandingIconBoltLeftUpStepSix = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SIX);
export const rdxLandingIconBoltLeftUpStepSeven = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_SEVEN);
export const rdxLandingIconBoltLeftUpStepEight = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_EIGHT);
export const rdxLandingIconBoltLeftUpStepNine = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_NINE);
export const rdxLandingIconBoltLeftUpStepTen = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TEN);
export const rdxLandingIconBoltLeftUpStepEleven = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_ELEVEN);
export const rdxLandingIconBoltLeftUpStepTwelve = createAction(RDX_LANDING_ICON_BOLT_LEFT_UP_STEP_TWELVE);


export const rdxLandingIconElectricalServicesLeftUpStepOne = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ONE);
export const rdxLandingIconElectricalServicesLeftUpStepTwo = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWO);
export const rdxLandingIconElectricalServicesLeftUpStepThree = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_THREE);
export const rdxLandingIconElectricalServicesLeftUpStepFour = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FOUR);
export const rdxLandingIconElectricalServicesLeftUpStepFive = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_FIVE);
export const rdxLandingIconElectricalServicesLeftUpStepSix = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SIX);
export const rdxLandingIconElectricalServicesLeftUpStepSeven = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_SEVEN);
export const rdxLandingIconElectricalServicesLeftUpStepEight = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_EIGHT);
export const rdxLandingIconElectricalServicesLeftUpStepNine = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_NINE);
export const rdxLandingIconElectricalServicesLeftUpStepTen = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TEN);
export const rdxLandingIconElectricalServicesLeftUpStepEleven = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_ELEVEN);
export const rdxLandingIconElectricalServicesLeftUpStepTwelve = createAction(RDX_LANDING_ICON_ELECTRICAL_SERVICES_LEFT_UP_STEP_TWELVE);

export const rdxLandingAllChargerBlack = createAction(RDX_LANDING_ALL_CHARGER_BLACK);
export const rdxLandingAllChargerLink = createAction(RDX_LANDING_ALL_CHARGER_LINK);

export const rdxLandingAllChargerLeft = createAction(RDX_LANDING_ALL_CHARGER_LEFT);
export const rdxLandingAllChargerNormal = createAction(
  RDX_LANDING_ALL_CHARGER_NORMAL,
  props<{
    fromLeft: boolean
  }>()
  );
export const rdxLandingAllChargerRight = createAction(RDX_LANDING_ALL_CHARGER_RIGHT);