import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'components/core';

const SectionItems = ({ title, data, className }) => (
  <div className={className}>
    <h2>{title}</h2>
    <div className="about__section">
      {data.map((item) => (
        <div key={item.name} className="about__section__item">
          <Link
            external
            href={item.link}
            variant={Link.VARIANTS.SCALE}
          >
            <img src={process.env.PUBLIC_URL + item.image} alt={item.name} height={item.height} />
          </Link>
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  </div>
);

SectionItems.defaultProps = {
  title: null,
  data: [],
  className: null,
};

SectionItems.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
};

export default SectionItems;
