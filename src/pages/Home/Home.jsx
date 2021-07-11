import { Welcome, HomeCase } from 'components';
import React from 'react';

import content from 'data/content.json';

import './styles.scss';

const Home = () => (
  <div className="home">
    <Welcome text={content.welcome} />
    {
      content.cases.map((caseContent) => (
        <HomeCase key={caseContent.id} content={caseContent} image={caseContent.images.home} />
      ))
    }
  </div>
);

export default Home;
