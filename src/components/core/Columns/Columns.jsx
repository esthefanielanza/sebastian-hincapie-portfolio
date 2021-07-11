import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Columns = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <div className="columns">
      {Children.map(children, (child) => (
        React.cloneElement(
          child,
          { className: classNames('col', child.props.className) },
        )
      ))}
    </div>
  );
};

Columns.defaultProps = {
  children: null,
};

Columns.propTypes = {
  children: PropTypes.node,
};

export default Columns;
