import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Button = ({
  children,
  className,
  variant,
  type,
  ...props
}) => {
  return (
    <button {...props} type={type} className={classNames(className, variant, 'button')}>
      {children}
    </button>
  );
};

Button.VARIANTS = {
  DEFAULT: '--default',
  OUTLINE: '--outline',
};

Button.defaultProps = {
  variant: Button.VARIANTS.DEFAULT,
  type: 'button',
  className: null,
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(Button.VARIANTS)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
