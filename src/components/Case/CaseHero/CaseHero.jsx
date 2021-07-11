import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CaseHero = ({
  name,
  logo,
  image,
  slogan,
}) => {
  return (
    <div className="case-hero">
      <div className="case-hero__wrapper">
        <div className="case-hero__wrapper__left">
          <img src={logo} alt={`${name} logo`} />
          <p>{slogan}</p>
        </div>
        <img src={image} alt={slogan} />
      </div>
    </div>
  );
};

CaseHero.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
};

export default CaseHero;
