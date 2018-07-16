import React from 'react';
import { PropTypes } from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';

export const HighlightTextInner = ({
  muiTheme: {
    palette: { accent3Color }
  },
  ...rest
}) => <span {...rest} style={{ color: accent3Color }} />;

HighlightTextInner.propTypes = {
  children: PropTypes.string.isRequired
};

export const HighlightText = muiThemeable()(HighlightTextInner);
