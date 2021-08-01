import React from 'react';
import { Link } from 'components/core';
import Social from 'components/Social';

import useContent from 'helpers/useContent';

import './styles.scss';

const Footer = () => {
  const { contact } = useContent();

  return (
    <footer className="footer">
      <span>
        Let’s Connect
      </span>
      <p>
        Feel free to reach out for collaborations or just a friendly hello 😄
      </p>
      <div className="footer__links">
        <Link variant={Link.VARIANTS.LIGHT} href={`mailto:${contact.email}?subject=Let’s%20Connect`} external>
          {contact.email}
        </Link>
        <Link variant={Link.VARIANTS.LIGHT} href={`tel:${contact.phone}`} external>
          {contact.phone_display}
        </Link>
      </div>
      <Social className="footer__social" />
    </footer>
  );
};

export default Footer;
