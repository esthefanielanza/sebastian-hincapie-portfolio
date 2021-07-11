import React from 'react';

import { about } from 'data/content.json';

import { ColorBlock, Columns, HTML } from 'components/core';

import './styles.scss';

const About = () => (
  <div className="about">
    {about.paragraphs.map(({ title, text, image }, idx) => (
      <Columns className="about__column" gap="8%" reverse={Boolean(idx % 2)}>
        {image ? <img src={image.url} alt={image.alt} /> : <ColorBlock />}
        <div>
          {title && <h1>{title}</h1>}
          {text && <HTML>{text}</HTML>}
        </div>
      </Columns>
    ))}
  </div>
);

export default About;
