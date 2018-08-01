import React from 'react';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import classNames from 'classnames';
import './style.scss';

const style = { color: '#fff' };

export const BreadcrumbsControl = ({ faded, left, right, getWidth, ...props }) => {
  const ctrClass = classNames({
    'breadcrumbs--control': true,
    'breadcrumbs--control-right': right,
    'breadcrumbs--control-left': left,
    'breadcrumbs--control-faded': faded
  });
  return (
    <span ref={getWidth} {...props} className={ctrClass}>
      <MoreHoriz className="breadcrumbs--contrlIcon" style={style} />
    </span>
  );
};
