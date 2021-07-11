import { getCaseRoute } from 'helpers/Route';
import React from 'react';

import { CaseHero, CaseOverview, CaseSection } from 'components/Case';

import content from 'data/content.json';
import './styles.scss';

const getCaseContent = (slug) => {
  return content.cases.find((c) => c.slug === slug);
};

const Case = () => {
  const route = getCaseRoute();
  const caseContent = getCaseContent(route);

  return (
    <div className="case">
      <CaseHero
        name={caseContent.name}
        logo={caseContent.logo}
        slogan={caseContent.slogan}
        image={caseContent.cover_img}
      />
      <div className="case__content">
        <CaseOverview content={caseContent} />
        {
          caseContent.sections.map((section) => (
            <CaseSection key={section.title} section={section} />
          ))
        }
      </div>
    </div>
  );
};

export default Case;
