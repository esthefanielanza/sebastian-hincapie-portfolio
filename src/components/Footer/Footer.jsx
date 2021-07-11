import React from 'react';
import { Link } from 'components/core';
import { ReactComponent as BehanceLogo } from 'static/icons/behance.svg';
import { ReactComponent as DribbleLogo } from 'static/icons/dribble.svg';
import { ReactComponent as InstagramLogo } from 'static/icons/instagram.svg';
import { ReactComponent as LinkedinLogo } from 'static/icons/linkedin.svg';
import contact from 'data/contact.json';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Let’s Connect
      </span>
      <p>
        Feel free to reach out for collaborations or just a friendly hello 😄
      </p>
      <div className="footer__links">
        <Link href={`mailto:${contact.email}?subject=Let’s%20Connect`} external>
          {contact.email}
        </Link>
        <Link href={`tel:${contact.phone}`} external>
          {contact.phone_display}
        </Link>
      </div>
      <div className="footer__social">
        <Link external href={contact.behance}>
          <BehanceLogo />
        </Link>
        <Link external href={contact.dribble}>
          <DribbleLogo />
        </Link>
        <Link external href={contact.instagram}>
          <InstagramLogo />
        </Link>
        <Link external href={contact.linkedin} target="_blank" rel="noopener">
          <LinkedinLogo />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
