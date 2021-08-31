import { getCaseRoute } from 'helpers/Route';
import React from 'react';

import {
  CaseHero,
  CaseOverview,
  CaseSection,
  CaseRights,
} from 'components/Case';
import useContent from 'helpers/useContent';
import { useMediaQuery } from 'react-responsive';

const getCaseContent = (slug, content) => {
  return content.cases?.find((c) => c.slug === slug);
};

const Case = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const route = getCaseRoute();
  const { content } = useContent();
  const caseContent = getCaseContent(route, content);

  if (!caseContent) {
    return null;
  }

  return (
    <div className="case">
      <CaseHero
        name={caseContent.name}
        logo={caseContent.logo}
        slogan={caseContent.slogan}
        image={isMobile ? caseContent.cover_img_mobile : caseContent.cover_img}
      />
      <div className="case__content">
        <CaseOverview content={caseContent} />
        {
          caseContent.sections.map((section) => (
            <CaseSection key={section.title} section={section} />
          ))
        }
        <CaseRights
          name={caseContent.name}
          year={caseContent.year}
          trademark={caseContent.trademark}
        />
      </div>
    </div>
  );
};

export default Case;
