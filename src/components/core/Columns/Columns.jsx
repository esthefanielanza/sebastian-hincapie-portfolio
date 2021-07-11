import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Columns = ({
  children, gap, reverse, className,
}) => {
  if (!children) {
    return null;
  }

  const columnClassName = classNames('columns', { '--reverse': reverse }, className);

  return (
    <div className={columnClassName} style={{ '--gap-value': gap }}>
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
  gap: 0,
  className: null,
  reverse: false,
};

Columns.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  reverse: PropTypes.bool,
};

export default Columns;
