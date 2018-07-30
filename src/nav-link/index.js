import React from 'react';
import { NavLink as _NavLink } from 'react-router-dom';
import { isLinkActive } from './helpers';

export const NavLink = ({ to, ...props }) => <_NavLink to={to} isActive={isLinkActive(to)} {...props} />;
