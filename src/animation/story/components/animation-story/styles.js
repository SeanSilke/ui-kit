import { ANIMATION_DURATION } from './constants';

export const defaultAnimatonPanelStyle = {
  transitionProperty: ['opacity', 'transform'],
  transitionDuration: `${ANIMATION_DURATION}ms`,
  transitionTimingFunction: 'ease-out'
};

export const transitionStyles = {
  still: [
    {
      exited: { transform: 'translate(0%)', transitionDuration: '0ms' },
      entering: { transform: 'translate(0%)', transitionDuration: '0ms' },
      entered: { transform: 'translate(0%)', transitionDuration: '0ms' },
      exiting: { transform: 'translate(0%)', transitionDuration: '0ms' }
    },
    {
      exited: { transform: 'translate(100%)', transitionDuration: '0ms' },
      entering: { transform: 'translate(100%)', transitionDuration: '0ms' },
      entered: { transform: 'translate(100%)', transitionDuration: '0ms' },
      exiting: { transform: 'translate(100%)', transitionDuration: '0ms' }
    }
  ],
  left2: [
    {
      exited: { transform: 'translate(-200%)' },
      entering: { transform: 'translate(0%)' },
      entered: { transform: 'translate(0%)' },
      exiting: { transform: 'translate(200%)' }
    },
    {
      exited: { transform: 'translate(-100%)' },
      entering: { transform: 'translate(100%)' },
      entered: { transform: 'translate(100%)' },
      exiting: { transform: 'translate(300%)' }
    }
  ],
  left1: [
    {
      exited: { transform: 'translate(-100%)' },
      entering: { transform: 'translate(0%)' },
      entered: { transform: 'translate(0%)' },
      exiting: { transform: 'translate(100%)' }
    },
    {
      exited: { transform: 'translate(0%)' },
      entering: { transform: 'translate(100%)' },
      entered: { transform: 'translate(100%)' },
      exiting: { transform: 'translate(200%)' }
    }
  ],
  leftFade: [
    {
      exited: { opacity: 0 },
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 }
    },
    {
      exited: { opacity: 0, transform: 'translate(100%)' },
      entering: { opacity: 1, transform: 'translate(100%)' },
      entered: { opacity: 1, transform: 'translate(100%)' },
      exiting: { opacity: 0, transform: 'translate(100%)' }
    }
  ],
  rightFade: [
    {
      exited: { opacity: 0 },
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 }
    },
    {
      exited: { opacity: 0, transform: 'translate(100%)' },
      entering: { opacity: 1, transform: 'translate(100%)' },
      entered: { opacity: 1, transform: 'translate(100%)' },
      exiting: { opacity: 0, transform: 'translate(100%)' }
    }
  ],

  leftShiftRightFade: [
    {
      exited: { opacity: 0 },
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0, transform: 'translate(-100%)' }
    },
    {
      exited: { opacity: 0, transform: 'translate(100%)' },
      entering: { opacity: 1, transform: 'translate(100%)', transitionDelay: `${ANIMATION_DURATION}ms` },
      entered: { opacity: 1, transform: 'translate(100%)', transitionDelay: `${ANIMATION_DURATION}ms` },
      exiting: { opacity: 0, transform: 'translate(100%)' }
    }
  ],

  right1: [
    {
      exited: { transform: 'translate(100%)' },
      entering: { transform: 'translate(0%)' },
      entered: { transform: 'translate(0%)' },
      exiting: { transform: 'translate(-100%)' }
    },
    {
      exited: { transform: 'translate(200%)' },
      entering: { transform: 'translate(100%)' },
      entered: { transform: 'translate(100%)' },
      exiting: { transform: 'translate(0%)' }
    }
  ],
  right2: [
    {
      exited: { transform: 'translate(200%)' },
      entering: { transform: 'translate(0%)' },
      entered: { transform: 'translate(0%)' },
      exiting: { transform: 'translate(-200%)' }
    },
    {
      exited: { transform: 'translate(300%)' },
      entering: { transform: 'translate(100%)' },
      entered: { transform: 'translate(100%)' },
      exiting: { transform: 'translate(-100%)' }
    }
  ]
};
