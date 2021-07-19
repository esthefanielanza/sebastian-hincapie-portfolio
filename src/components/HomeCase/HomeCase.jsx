import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from 'components/core';
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
          <Link href={`/case/${content.slug}`}>
            <Button> See use case </Button>
          </Link>
        </div>
        <img src={process.env.PUBLIC_URL + image.url} alt={image.alt} />
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
    slug: PropTypes.string.isRequired,
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
