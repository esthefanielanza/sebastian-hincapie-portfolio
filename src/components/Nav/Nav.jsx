import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'components/core';

import MobileMenu from './MobileMenu';

import './styles.scss';

const Nav = ({ links }) => {
  const [isMobileMenuOpen, handleMobileMenu] = useState(false);
  const [successMessages, setSuccessMessage] = useState({});

  const renderLogo = () => (
    <Link variant={Link.VARIANTS.BUTTON} href="/">
      Sebastian Hincapie
    </Link>
  );

  const handleSuccessMessage = (name) => {
    setSuccessMessage({
      ...successMessages,
      [name]: true,
    });

    setTimeout(() => {
      setSuccessMessage({
        ...successMessages,
        [name]: false,
      });
    }, 3000);
  };

  return (
    <nav className="nav">
      {renderLogo()}

      <div className="nav__menu">
        <div className="nav__menu__links">
          {links.map(({
            name, href, external, onClick, successMessage,
          }) => {
            const successMessageClassName = classNames(
              'nav__menu__success',
              { visible: successMessages[name] },
            );

            return (
              <div key={name}>
                <Link
                  variant={Link.VARIANTS.BUTTON}
                  href={href}
                  external={external}
                  onClick={() => {
                    if (onClick) {
                      onClick(() => handleSuccessMessage(name));
                    }
                  }}
                >
                  {name}
                </Link>
                <span className={successMessageClassName}>
                  {successMessage}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="nav__menu--mobile">
        <button type="button" onClick={() => handleMobileMenu(true)}>
          <span />
          <span />
        </button>

        <MobileMenu
          links={links}
          open={isMobileMenuOpen}
          renderLogo={renderLogo}
          handleMobileMenu={handleMobileMenu}
          handleSuccessMessage={handleSuccessMessage}
          successMessages={successMessages}
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
