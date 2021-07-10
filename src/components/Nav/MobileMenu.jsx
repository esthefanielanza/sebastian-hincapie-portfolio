import React from 'react';
import PropTypes from 'prop-types';

const MobileMenu = ({ open, renderLogo }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="nav__menu--mobile__overlay">
      <div className="nav__menu--mobile__overlay__header">
        {renderLogo()}
      </div>
    </div>
  );
}

MobileMenu.defaultProps = {
  open: false,
};

MobileMenu.propTypes = {
  open: PropTypes.bool,
  renderLogo: PropTypes.func.isRequired,
};

export default MobileMenu;
