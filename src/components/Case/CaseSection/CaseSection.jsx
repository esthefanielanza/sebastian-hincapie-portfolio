import React from 'react';
import PropTypes from 'prop-types';

import { HTML } from 'components/core';


const CaseSection = ({ section }) => {
  return (
    <div className="case-section">
      <h2>{section.title}</h2>
      <HTML tag="p">
        {section.content}
      </HTML>
    </div>
  );
};

CaseSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseSection;
