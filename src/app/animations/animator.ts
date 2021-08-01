import { animate, state, style, transition, trigger } from "@angular/animations";
import { ANIMATION_STATE_GROW, ANIMATION_STATE_NORMAL, ANIMATION_STATE_LEFT_START, ANIMATION_STATE_LEFT_STEP_ONE, ANIMATION_TIME_250, ANIMATION_TIME_500, ANIMATION_STATE_LEFT_STEP_TWO, ANIMATION_STATE_LEFT_STEP_THREE, ANIMATION_STATE_LEFT_STEP_FOUR, ANIMATION_STATE_LEFT_STEP_FIVE, ANIMATION_STATE_LEFT_STEP_SIX, ANIMATION_STATE_LEFT_STEP_SEVEN, ANIMATION_STATE_LEFT_STEP_EIGHT, ANIMATION_STATE_LEFT_STEP_NINE, ANIMATION_STATE_LEFT_STEP_TEN, ANIMATION_STATE_LEFT_STEP_ELEVEN, ANIMATION_STATE_LEFT_STEP_TWELVE, ANIMATION_STATE_RIGHT, ANIMATION_STATE_LEFT, ANIMATION_TIME_1000 } from "./constants";

export const transformLandingBlock = trigger('transformLandingBlockTrigger', [
    transition(':enter', [
      style({
          transform: 'translateY(-100%) translateX(-100%) rotate(0deg) scale(0)'
      }), animate(ANIMATION_TIME_500, style({
          transform: 'translateY(0) translateX(0) rotate(360deg) scale(1)'
      }))
    ])
]);
export const transformLandingAllChargers = trigger('transformLandingAllChargersTrigger', [
  state(ANIMATION_STATE_RIGHT, style({
    transform: 'translateX(100%) translateY(-100vh) rotate(0deg)',
    opacity: 0,
  })),
  state(ANIMATION_STATE_NORMAL, style({
    transform: 'translateX(0) translateY(0) rotate(360deg)',
    opacity: 1
  })),
  state(ANIMATION_STATE_LEFT, style({
    transform: 'translateX(-100%) translateY(-100vh) rotate(0deg)',
    opacity: 0
  })),
  transition(ANIMATION_STATE_RIGHT + '<=>' + ANIMATION_STATE_NORMAL, animate(ANIMATION_TIME_1000)),
  transition(ANIMATION_STATE_LEFT + '<=>' + ANIMATION_STATE_NORMAL, animate(ANIMATION_TIME_1000))
]);
export const ANIMATION_STATE_INVISIBLE = 'ANIMATION_STATE_INVISIBLE';
export const transformLandingSubtitle = trigger('transformLandingSubtitleTrigger', [

transition(':enter', [
    style({
        transform: 'translateX(-100%) rotate(0deg)'
    }), animate(ANIMATION_TIME_500, style({
        transform: 'translateX(0) rotate(360deg)'
    }))
  ])
]);
export const transformBlockGrowShrink = trigger('transformBlockGrowShrinkTrigger', [
  state(ANIMATION_STATE_NORMAL, style({
    transform: 'scale(1)'
  })),
  state(ANIMATION_STATE_GROW, style({
    transform: 'scale(1.2)'
  })),
  transition(ANIMATION_STATE_GROW + '<=>' + ANIMATION_STATE_NORMAL, animate(ANIMATION_TIME_250))
])
export const transformIconLeftUp = trigger('transformIconLeftUpTrigger', [
  state(ANIMATION_STATE_LEFT_START, style({
    transform: 'translateX(0vw) translateY(0)',
    opacity: 0,
  })),
  state(ANIMATION_STATE_LEFT_STEP_ONE, style({
    transform: 'translateX(7.5vw) translateY(15vh)',
    opacity: 1
  })),
  state(ANIMATION_STATE_LEFT_STEP_TWO, style({
    transform: 'translateX(15vw) translateY(0)',
    opacity: 0,
  })),
  state(ANIMATION_STATE_LEFT_STEP_THREE, style({
    transform: 'translateX(22.5vw) translateY(15vh)',
    opacity: 1,
  })),
  state(ANIMATION_STATE_LEFT_STEP_FOUR, style({
    transform: 'translateX(30vw) translateY(0)',
    opacity: 0,
  })),
  state(ANIMATION_STATE_LEFT_STEP_FIVE, style({
    transform: 'translateX(37.5vw) translateY(15vh)',
    opacity: 1,
  })),
  state(ANIMATION_STATE_LEFT_STEP_SIX, style({
    transform: 'translateX(45vw) translateY(0)',
    opacity: 0,
  })),
  state(ANIMATION_STATE_LEFT_STEP_SEVEN, style({
    transform: 'translateX(52.5vw) translateY(15vh)',
    opacity: 1,
  })),
  state(ANIMATION_STATE_LEFT_STEP_EIGHT, style({
    transform: 'translateX(60vw) translateY(0)',
    opacity: 0,
  })),
  state(ANIMATION_STATE_LEFT_STEP_NINE, style({
    transform: 'translateX(67.5vw) translateY(15vh)',
    opacity: 1,
  })),
  state(ANIMATION_STATE_LEFT_STEP_TEN, style({
    transform: 'translateX(75vw) translateY(0)',
    opacity: 0
  })),
  state(ANIMATION_STATE_LEFT_STEP_ELEVEN, style({
    transform: 'translateX(82.5vw) translateY(15vh)',
    opacity: 1,
  })),
  state(ANIMATION_STATE_LEFT_STEP_TWELVE, style({
    transform: 'translateX(90vw) translateY(0)',
    opacity: 0,
  })),
  transition(
    ANIMATION_STATE_LEFT_START + '=>' + ANIMATION_STATE_LEFT_STEP_ONE,
    animate(ANIMATION_TIME_500),
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_ONE + '=>' + ANIMATION_STATE_LEFT_STEP_TWO,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_TWO + '=>' + ANIMATION_STATE_LEFT_STEP_THREE,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_THREE + '=>' + ANIMATION_STATE_LEFT_STEP_FOUR,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_FOUR + '=>' + ANIMATION_STATE_LEFT_STEP_FIVE,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_FIVE + '=>' + ANIMATION_STATE_LEFT_STEP_SIX,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_SIX + '=>' + ANIMATION_STATE_LEFT_STEP_SEVEN,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_SEVEN + '=>' + ANIMATION_STATE_LEFT_STEP_EIGHT,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_EIGHT + '=>' + ANIMATION_STATE_LEFT_STEP_NINE,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_NINE + '=>' + ANIMATION_STATE_LEFT_STEP_TEN,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_TEN + '=>' + ANIMATION_STATE_LEFT_STEP_ELEVEN,
    animate(ANIMATION_TIME_500)
  ),
  transition(
    ANIMATION_STATE_LEFT_STEP_ELEVEN + '=>' + ANIMATION_STATE_LEFT_STEP_TWELVE,
    animate(ANIMATION_TIME_500)
  )
]);
export const transformLandingContact = trigger('transformLandingContactTrigger', [
  transition(':enter', [
    style({
        transform: 'translateY(100%) translateX(100%) rotate(360deg) scale(0)'
    }), animate(ANIMATION_TIME_500, style({
        transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)'
    }))
  ])
]);
export const transformProductsProductImage = trigger('transformProductsProductImageTrigger', [
  transition(':enter', [
    style({
      transform: 'translateX(100vw)',
      opacity: 0
    }), animate(3000, style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])
])
export const transformProductsProductDescription = trigger('transformProductsProductDescriptionTrigger', [
  transition(':enter', [
    style({
      transform: 'translateY(50vh)',
      opacity: 0,
    }), animate(500, style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ])
])
export const transformProductsProductTitle = trigger('transformProductsProductTitleDescriptionTrigger', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
      opacity: 0
    }), animate(500, style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])
])
