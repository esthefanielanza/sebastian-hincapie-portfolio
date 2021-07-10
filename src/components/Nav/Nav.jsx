import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'components/core';

import MobileMenu from './MobileMenu';

import './styles.scss';

const Nav = ({ links }) => {
  const [isMobileMenuOpen, handleMobileMenu] = useState(false);

  const renderLogo = () => (
    <Link variant={Link.VARIANTS.BUTTON} to="/">
      Sebastian Hincapie
    </Link>
  );

  return (
    <nav className="nav">
      {renderLogo()}

      <div className="nav__menu">
        {links.map(({ name, to }) => (
          <Link variant={Link.VARIANTS.BUTTON} to={to}>
            {name}
          </Link>
        ))}
      </div>

      <div className="nav__menu--mobile">
        <button type="button" onClick={() => handleMobileMenu(true)}>
          <span />
          <span />
        </button>

        <MobileMenu
          open={false}
          renderLogo={renderLogo}
          handleMobileMenu={handleMobileMenu}
        />
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  links: [],
};

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
  })),
};

export default Nav;
