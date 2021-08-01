import React, { useState } from 'react';
import classNames from 'classnames';

import Text from 'helpers/Text';
import {
  Button,
  ColorBlock,
  Columns,
  HTML,
  Link,
} from 'components/core';
import useContent from 'helpers/useContent';
import { Social } from 'components';
import SectionItems from './SectionItems';

import './styles.scss';

const About = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const { content: { about = {} }, contact } = useContent();

  const handleSuccessMessage = () => {
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="about">

      {about.paragraphs?.map(({
        title, text, image, social,
      }, idx) => (
        <Columns key={text} className="about__column" gap="8%" reverse={Boolean(idx % 2)}>
          {image
            ? <div className="about__column__img"><img src={process.env.PUBLIC_URL + image.url} alt={image.alt} /></div>
            : <ColorBlock />}
          <div>
            {title && <h1>{title}</h1>}
            {text && <HTML>{text}</HTML>}
            {social && (
              <Columns className="about__social" gap={10} reverse>
                <div className="about__social__cv">
                  <Link
                    href="/static/about/cv.pdf"
                    download="SebastianHincapie HV English.pdf"
                    external
                    variant={Link.VARIANTS.BUTTON}
                  >
                    Download CV
                  </Link>
                </div>
                <Social reverse />
              </Columns>
            )}
          </div>
        </Columns>
      ))}

      <SectionItems
        title={about.clients?.title}
        data={about.clients?.data}
      />

      <SectionItems
        title={about.education?.title}
        data={about.education?.data}
        className="education"
      />

      <div className="about__contact">
        <Button
          variant={Button.VARIANTS.OUTLINE}
          onClick={() => {
            Text.copyToClipboard(contact.email);
            handleSuccessMessage();
          }}
        >
          Get in touch
        </Button>
        <p className={classNames({ visible: successMessage })}>
          My email address has been copied!
        </p>
      </div>
    </div>
  );
};

export default About;
