import PropTypes from 'prop-types';

export const itemShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
});
