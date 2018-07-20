import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbsSeparator } from '../breadcrumbs-separator';

export const BreadcrumbsItem = ({ text, href, hasSeparator }) => (
  <div className="breadcrumbs--item">
    {hasSeparator ? <BreadcrumbsSeparator /> : null}
    {href ? (
      <Link className="breadcrumbs--link" to={href}>
        {text}
      </Link>
    ) : (
      <span className="breadcrumbs--text">{text}</span>
    )}
  </div>
);
