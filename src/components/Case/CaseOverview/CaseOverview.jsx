/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import { HTML, Link } from 'components/core';

import './styles.scss';

const CaseOverview = ({ content }) => {
  return (
    <div className="case-overview">
      <div className="case-overview__left">
        <h2>Overview:</h2>
        <HTML tag="p">{content.overview}</HTML>
      </div>
      <div className="case-overview__right">
        <div className="case-overview__right__item">
          <p>
            <b>Year: </b>
            {content.year}
          </p>
        </div>
        <div className="case-overview__right__item">
          <p>
            <b>Project Role: </b>
            {content.role}
          </p>
        </div>
        <div className="case-overview__right__item">
          <HTML tag="p">
            {`<b>Collaborators: </b>${content.collaborators}`}
          </HTML>
        </div>
        <div className="case-overview__right__item">
          <p>
            <b>Agency: {content.agency}</b>
          </p>
        </div>
        <div className="case-overview__right__stack">
          <p>{content.type}</p>
          <span>{content.stack}</span>
        </div>
        <div className="case-overview__right__apps">
          { content.website && (
            <Link variant={Link.VARIANTS.UNDERLINE} href={content.website} external>
              See site live
            </Link>
          )}
          { content.app && (
            <Link variant={Link.VARIANTS.UNDERLINE} href={content.app?.ios} external>
              Download app
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

CaseOverview.propTypes = {
  content: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    collaborators: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    website: PropTypes.string,
    app: PropTypes.shape({
      ios: PropTypes.string.isRequired,
      android: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CaseOverview;
