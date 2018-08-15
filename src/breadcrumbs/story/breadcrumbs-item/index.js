import React from 'react';
import { BreadcrumbsSeparator } from '../breadcrumbs-separator';
import './style.scss';

export const BreadcrumbsItem = ({ text, href, hasSeparator }) => (
  <div className="breadcrumbs--item">
    {href ? (
      <a className="breadcrumbs--link" href={href}>
        {text}
      </a>
    ) : (
      <span className="breadcrumbs--text">{text}</span>
    )}
    {hasSeparator ? <BreadcrumbsSeparator /> : null}
  </div>
);
