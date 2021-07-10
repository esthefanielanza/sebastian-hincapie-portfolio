import React from 'react';
import content from 'data/content.json';

import './styles.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 dangerouslySetInnerHTML={{ __html: content.welcome }} />
    </div>
  );
};

export default Welcome;
