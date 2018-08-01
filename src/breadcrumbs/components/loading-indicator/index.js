import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './style.scss';

const style = { lineHeight: '20px' };

export const LoadingIndicator = () => (
  <div className="breadcrumbs--item">
    <CircularProgress color="white" size={20} thickness={2} style={style} />
  </div>
);
