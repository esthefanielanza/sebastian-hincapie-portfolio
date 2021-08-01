import { Welcome, HomeCase } from 'components';
import useContent from 'helpers/useContent';
import React from 'react';

import './styles.scss';

const Home = () => {
  const { content } = useContent();

  return (
    <div className="home">
      <Welcome text={content.welcome} />
      {
        content.cases?.map((caseContent) => (
          <HomeCase key={caseContent.id} content={caseContent} image={caseContent.images.home} />
        ))
      }
    </div>
  );
};

export default Home;
