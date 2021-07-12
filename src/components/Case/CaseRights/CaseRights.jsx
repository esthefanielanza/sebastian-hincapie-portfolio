/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CaseRights = ({ name, year, trademark }) => {
  return (
    <div className="case-rights">
      <span>© {year} {name}</span>
      <p>
        {trademark}
      </p>
    </div>
  );
};

CaseRights.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  trademark: PropTypes.string.isRequired,
};

export default CaseRights;
