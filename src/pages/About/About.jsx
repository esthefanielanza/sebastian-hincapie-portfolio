import React from 'react';

import { about } from 'data/content.json';

import {
  ColorBlock, Columns, HTML, Link,
} from 'components/core';

import './styles.scss';
import { Social } from 'components';

const About = () => (
  <div className="about">

    {about.paragraphs.map(({
      title, text, image, social,
    }, idx) => (
      <Columns className="about__column" gap="8%" reverse={Boolean(idx % 2)}>
        {image
          ? <div className="about__column__img"><img src={image.url} alt={image.alt} /></div>
          : <ColorBlock />}
        <div>
          {title && <h1>{title}</h1>}
          {text && <HTML>{text}</HTML>}
          {social && (
            <Columns className="about__social" gap={10} reverse>
              <Link href="a" external variant={Link.VARIANTS.BUTTON}>
                Download CV
              </Link>
              <Social reverse />
            </Columns>
          )}
        </div>
      </Columns>
    ))}
  </div>
);

export default About;
