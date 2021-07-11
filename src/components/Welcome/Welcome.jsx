import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Welcome = ({ text }) => {
  return (
    <div className="welcome">
      <h1 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

Welcome.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Welcome;
