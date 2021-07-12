import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { HTML } from 'components/core';

import './styles.scss';

const CaseSection = ({ section }) => {
  return (
    <div className="case-section">
      <div className="case-section__content">
        <h2>{section.title}</h2>
        <HTML tag="p">
          {section.content}
        </HTML>
      </div>
      { section.images?.length > 1 && (
        <div className={classNames('case-section__images', { '--padding': section.padding })}>
          {
            section.images?.map((image) => (
              <div className="case-section__images__wrapper">
                <img height={image.height} key={image.label} src={image.url} alt={image.label} />
                <span>{image.label}</span>
              </div>
            ))
          }
        </div>
      )}
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
    padding: PropTypes.bool,
  }).isRequired,
};

export default CaseSection;
