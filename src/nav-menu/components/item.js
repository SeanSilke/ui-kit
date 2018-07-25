import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import { itemShape } from '../proptypes';
import { ActiveInnerDivStyle } from './style';
import { Route } from 'react-router-dom';

const MenuItem = ({ item: { to, text }, handleToggle }) => {
  return (
    <Route path={to}>
      {({ match, history }) => {
        const onTouchTap = () => {
          history.push(to);
          handleToggle();
        };
        return (
          <ListItem primaryText={text} onTouchTap={onTouchTap} innerDivStyle={match ? ActiveInnerDivStyle : null} />
        );
      }}
    </Route>
  );
};

MenuItem.propTypes = {
  item: itemShape.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export { MenuItem };
