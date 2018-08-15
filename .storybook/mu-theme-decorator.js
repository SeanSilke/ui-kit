import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './theme';

export const MUThemeDecorator = story => <MuiThemeProvider muiTheme={muiTheme}>{story()}</MuiThemeProvider>;
