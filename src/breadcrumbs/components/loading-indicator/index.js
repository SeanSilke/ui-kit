import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { BreadcrumbsSeparator } from '../breadcrumbs-separator';

export const LoadingIndicator = () => (
  <div className="breadcrumbs--item">
    <BreadcrumbsSeparator />
    <CircularProgress color="white" size={20} thickness={2} style={{ lineHeight: '20px' }} />
  </div>
);
