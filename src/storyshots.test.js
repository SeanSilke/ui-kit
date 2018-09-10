import initStoryshots from '@storybook/addon-storyshots';

// Снимки не будут работать с некоторыми компонентами
// По этому заменим эти компоненты на моки

// TextField - использует генерацию случайных id  для input label ,
// по этому снимки будут всегда разные.
// Это повидение исправили в версии v1.0,
// ссылка на issue - https://github.com/mui-org/material-ui/issues/6834#issuecomment-379032428
jest.mock('material-ui/TextField', () => 'material-ui/TextField');

// Для историй Drawer и __Material-UI которые используют getNodeFromInstance или findDOMNode
// https://github.com/facebook/react/issues/7371#issuecomment-317396864
jest.mock('material-ui/internal/EnhancedButton', () => 'material-ui/internal/EnhancedButton');
jest.mock('material-ui/internal/EnhancedSwitch', () => 'material-ui/internal/EnhancedSwitch');
jest.mock('material-ui/internal/RenderToLayer', () => 'material-ui/internal/RenderToLayer');
//
// Для рещения предыдущей проблемы можно на прямаю мокать обозначенные функции и возвращать что-то
// похожие на ожидаемые ноды, но в этом случае получися весьма не очевидный код :
// jest.mock('react-dom', () => ({
//   findDOMNode: e => {
//     console.log(e);
//     return { checked: null, blur: () => null };
//   }
// }));

// Можно попробвать мокать рефы как указанно здесь
// github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#using-createnodemock-to-mock-refs
// https://reactjs.org/blog/2016/11/16/react-v15.4.0.html#mocking-refs-for-snapshot-testing
// В коде тогда тоже появляются зависимости от внутренних путей MI, e.g. "material-ui/internal/EnhancedSwitch"
// Этот подход не решает прооблему с "getNodeFromInstance"
// initStoryshots({
//   test: snapshotWithOptions({
//     createNodeMock: element => {
//       if (element.type === 'material-ui/internal/EnhancedSwitch') {
//         return document.createElement('input');
//       }
//       if (element.type === 'div') {
//         return document.createElement('div');
//       }
//       if (element.type === 'input') {
//         return document.createElement('input');
//       }
//       if (element.type === 'material-ui/TextField') {
//         return document.createElement('textarea');
//       }
//       if (element.type === 'button') {
//         return document.createElement('button');
//       }
//       if (element.type === 'span') {
//         return document.createElement('span');
//       }
//       return null;
//     }
//   })
// });

initStoryshots({});
