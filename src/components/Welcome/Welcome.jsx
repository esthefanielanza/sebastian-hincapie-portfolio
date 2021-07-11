import React from 'react';
import content from 'data/content.json';

import './styles.scss';
import { HTML } from 'components/core';

const Welcome = () => {
  return (
    <div className="welcome">
      <HTML tag="h1">
        {content.welcome}
      </HTML>
    </div>
  );
};

export default Welcome;
