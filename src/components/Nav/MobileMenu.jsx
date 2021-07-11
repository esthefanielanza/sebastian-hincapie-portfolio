import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as Close } from 'static/icons/close.svg';
import { Link } from 'components/core';

const MobileMenu = ({
  open,
  renderLogo,
  handleMobileMenu,
  links,
  handleSuccessMessage,
  successMessages,
}) => {
  const className = classNames('nav__menu--mobile__overlay', { '--open': open });

  const closeMobileMenu = () => handleMobileMenu(false);

  const handleClick = (name, onClick) => {
    handleSuccessMessage(name);
    if (onClick) {
      onClick(() => handleSuccessMessage(name));
    } else {
      closeMobileMenu();
    }
  };

  return (
    <div className={className}>
      <div className="nav__menu--mobile__overlay__header">
        {renderLogo()}
        <button type="button" onClick={closeMobileMenu}>
          <Close />
        </button>
      </div>

      <div className="nav__menu--mobile__overlay__links">
        {links.map(({
          name, href, external, onClick, successMessage,
        }) => {
          const successMessageClassName = classNames(
            { visible: successMessages[name] },
          );

          return (
            <div key={name}>
              <Link
                href={href}
                external={external}
                onClick={() => handleClick(name, onClick)}
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
  );
};

MobileMenu.defaultProps = {
  open: false,
  links: [],
  successMessages: {},
};

MobileMenu.propTypes = {
  open: PropTypes.bool,
  renderLogo: PropTypes.func.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
  })),
  handleSuccessMessage: PropTypes.func.isRequired,
  successMessages: PropTypes.shape({
    [PropTypes.string]: PropTypes.bool,
  }),
};

export default MobileMenu;
