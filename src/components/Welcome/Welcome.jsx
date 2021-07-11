import React from 'react';
import PropTypes from 'prop-types';

import { HTML } from 'components/core';

import './styles.scss';

const Welcome = ({ text }) => {
  return (
    <div className="welcome">
      <HTML tag="h1">
        {text}
      </HTML>
    </div>
  );
};

Welcome.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Welcome;
