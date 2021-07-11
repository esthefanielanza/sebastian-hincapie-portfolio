import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const ColorBlock = ({ color, className }) => (
  <div className={classNames('color-block', className)} style={{ backgroundColor: color }} />
);

ColorBlock.defaultProps = {
  color: null,
  className: null,
};

ColorBlock.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default ColorBlock;
