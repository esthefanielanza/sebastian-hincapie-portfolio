import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'components/core';

import { ReactComponent as BehanceLogo } from 'static/icons/behance.svg';
import { ReactComponent as DribbleLogo } from 'static/icons/dribble.svg';
import { ReactComponent as InstagramLogo } from 'static/icons/instagram.svg';
import { ReactComponent as LinkedinLogo } from 'static/icons/linkedin.svg';

import useContent from 'helpers/useContent';
import './styles.scss';

const Social = ({ className }) => {
  const { contact } = useContent();

  return (
    <div className={classNames('social', className)}>
      <Link variant={Link.VARIANTS.SCALE} external href={contact.behance}>
        <BehanceLogo />
      </Link>
      <Link variant={Link.VARIANTS.SCALE} external href={contact.dribble}>
        <DribbleLogo />
      </Link>
      <Link variant={Link.VARIANTS.SCALE} external href={contact.instagram}>
        <InstagramLogo />
      </Link>
      <Link variant={Link.VARIANTS.SCALE} external href={contact.linkedin} target="_blank" rel="noopener">
        <LinkedinLogo />
      </Link>
    </div>
  );
};

Social.defaultProps = {
  className: null,
};

Social.propTypes = {
  className: PropTypes.string,
};

export default Social;
