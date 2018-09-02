import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { themesList } from '../ui-themes';
import { MenuDrawer } from './index';
import { RaisedButton, MenuItem } from 'material-ui';

class StoryComponent extends Component {
  state = { open: false };
  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <RaisedButton onTouchTap={this.toggleOpen} label="Show MenuDrawer" primary />
        <MenuDrawer open={this.state.open} handleToggle={this.toggleOpen}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </MenuDrawer>
      </div>
    );
  }
}

storiesOf('Drawer', module)
  .addDecorator(story => {
    const storyKind = story();
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>{storyKind}</div>;
  })
  .addDecorator(muiTheme(themesList))
  .add('MenuDrawer', () => <StoryComponent />);
