import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';

// Next function is used in storyshots and it creates a delay before screenshot.
// We need the delay before screenshot to wait before all transition is settled.
// Without this delay AnimatinManager and sometime Breadcrumbs component
// will fall screenshots tests.
const beforeScreenshot = (page, { context: { kind } }) => {
  if (kind === 'AnimationManager' || kind === 'Breadcrumbs') {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, 450)
    );
  }
  return null;
};
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    beforeScreenshot
  })
});
