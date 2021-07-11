import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

import './styles.scss';

const Link = ({
  href, variant, children, external, ...props
}) => {
  const className = classNames('link', variant);

  if (external) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink {...props} className={className} to={href}>
      {children}
    </RouterLink>
  );
};

Link.VARIANTS = {
  DEFAULT: '--default',
  BUTTON: '--button',
  UNDERLINE: '--underline',
};

Link.defaultProps = {
  variant: Link.VARIANTS.DEFAULT,
  children: null,
  external: false,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Link.VARIANTS),
  children: PropTypes.node,
  external: PropTypes.bool,
};

export default Link;
