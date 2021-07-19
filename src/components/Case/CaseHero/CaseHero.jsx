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
          <img src={process.env.PUBLIC_URL + logo} alt={`${name} logo`} />
          <p>{slogan}</p>
        </div>
        { image && <img src={process.env.PUBLIC_URL + image} alt={slogan} /> }
      </div>
    </div>
  );
};

CaseHero.defaultProps = {
  image: null,
};

CaseHero.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  image: PropTypes.string,
  slogan: PropTypes.string.isRequired,
};

export default CaseHero;
