import Link from 'components/core/Link';
import React from 'react';

const Home = () => (
  <>
    <h1>Home</h1>
    <Link href="/about">This is a link!</Link>
    <Link variant={Link.VARIANTS.BUTTON} href="/about">This is a link!</Link>
    <Link variant={Link.VARIANTS.UNDERLINE} href="/about">This is a link!</Link>
  </>
);

export default Home;
