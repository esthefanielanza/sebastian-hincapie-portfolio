import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { HTML } from 'components/core';

import './styles.scss';

const CaseSection = ({ section }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const imgShadow = { boxShadow: section.shadow };

  return (
    <div className="case-section">
      <div className="case-section__content">
        <h2>{section.title}</h2>
        <HTML tag="p">
          {section.content}
        </HTML>
      </div>
      { section.images?.length > 0 && (
        <div
          style={{ '--padding-value': `${section.padding}px` }}
          className={classNames('case-section__images', { '--padding': section.padding })}
        >
          {
            section.images?.map((image) => (
              <div key={image.url} className="case-section__images__wrapper">
                <img
                  style={imgShadow}
                  height={isMobile ? image.mobile_height : image.height}
                  src={process.env.PUBLIC_URL
                    + (isMobile && image.url_mobile ? image.url_mobile : image.url)}
                  alt={image.label || section.title}
                />
                { (image.label || image.sub_label) && (
                  <div className="case-section__images__wrapper__label">
                    { image.label && <span>{image.label}</span> }
                    { image.sub_label && <p>{image.sub_label}</p> }
                  </div>
                )}
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
      url_mobile: PropTypes.string,
      label: PropTypes.string,
      sub_label: PropTypes.string,
      height: PropTypes.number,
      mobile_height: PropTypes.number,
    })),
    padding: PropTypes.number,
    shadow: PropTypes.string,
  }).isRequired,
};

export default CaseSection;
