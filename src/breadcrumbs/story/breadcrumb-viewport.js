import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

export const BreadCrumbViewport = muiThemeable()(
  ({
    children,
    muiTheme: {
      baseTheme: {
        palette: { primary1Color: backgroundColor },
        fontFamily
      },
      appBar: { height }
    }
  }) => {
    const style = {
      backgroundColor,
      lineHeight: height + 'px',
      fontFamily
    };

    return <div style={style}>{children}</div>;
  }
);
