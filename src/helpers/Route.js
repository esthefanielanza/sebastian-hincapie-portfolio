import { useLocation } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const getCaseRoute = () => {
  const path = useLocation().pathname;
  const splittedPath = path.split('/');

  return splittedPath[splittedPath.length - 1];
};
