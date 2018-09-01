import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigoA200, teal500, blueGrey500, grey100, deepOrange600 } from 'material-ui/styles/colors';

const StandardTheme = {
  themeName: 'StandardTheme',
  fontFamily: 'PT Sans Narrow, sans-serif',
  palette: {
    primary1Color: teal500,
    primary2Color: blueGrey500,
    primary3Color: indigoA200,
    accent1Color: indigoA200,
    accent2Color: grey100,
    accent3Color: deepOrange600
  }
};
const nextTheme = {
  themeName: 'DefaultTheme'
};

export const themesList = [StandardTheme, nextTheme];
