import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <img src={process.env.PUBLIC_URL + feature.icon} alt={feature.title} />
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Feature;
