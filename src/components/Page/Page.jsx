import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Page = ({ children }) => {
  return (
    <div className="page">
      <div className="page__container">
        {children}
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
