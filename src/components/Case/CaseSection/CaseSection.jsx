import React from 'react';
import PropTypes from 'prop-types';

import { HTML } from 'components/core';

import './styles.scss';

const CaseSection = ({ section }) => {
  return (
    <div className="case-section">
      <h2>{section.title}</h2>
      <HTML tag="p">
        {section.content}
      </HTML>
      <div className="case-section__images">
        {
          section.images?.map((image) => (
            <div className="case-section__images__wrapper">
              <img key={image.label} src={image.url} alt={image.label} />
              <span>{image.label}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

CaseSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default CaseSection;
