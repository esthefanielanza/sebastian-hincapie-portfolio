import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/core';
import Feature from './Feature';

import './styles.scss';

const HomeCase = ({ content, image }) => {
  return (
    <div className="home-case">
      <div className="home-case__wrapper">
        <div className="home-case__wrapper__info">
          <span>{content.type}</span>
          <h2>{content.name}</h2>
          <p>{content.slogan}</p>
          <Button> See use case </Button>
        </div>
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="home-case__features">
        {
          content.features.map((feature) => (
            <Feature feature={feature} key={feature.title} />
          ))
        }
      </div>
    </div>
  );
};

HomeCase.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeCase;
