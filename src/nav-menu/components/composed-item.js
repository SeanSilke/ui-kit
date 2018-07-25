import React from 'react';
import { Route } from 'react-router-dom';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import { MenuItem } from './item';
import { itemShape } from '../proptypes';
import { ActiveInnerDivStyle } from './style';

const ComposedMenuItem = ({ handleToggle, item: { children, text, to } }) => (
  <Route path={to}>
    {({ match }) => (
      <ListItem
        primaryText={text}
        primaryTogglesNestedList
        nestedItems={children.map(itemChild => (
          <MenuItem key={itemChild.to} item={itemChild} handleToggle={handleToggle} />
        ))}
        innerDivStyle={match ? ActiveInnerDivStyle : null}
      />
    )}
  </Route>
);

ComposedMenuItem.propTypes = {
  item: PropTypes.shape({
    ...itemShape.isRequired,
    ...{ children: itemShape.isRequired }
  }).isRequired,
  handleToggle: PropTypes.func.isRequired
};

export { ComposedMenuItem };
