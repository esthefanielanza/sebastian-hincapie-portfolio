import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({ children, tag: Tag, ...props }) => (
  <Tag {...props} dangerouslySetInnerHTML={{ __html: children }} />
);

HTML.defaultProps = {
  children: null,
  tag: 'div',
};

HTML.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};

export default HTML;
