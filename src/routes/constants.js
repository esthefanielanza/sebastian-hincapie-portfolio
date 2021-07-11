import contact from 'data/contact.json';
import Text from 'helpers/Text';

export const ABOUT = '/about';
export const CASE = '/case/:caseId';
export const HOME = '/';

export const NAV_LINKS = [
  { name: 'Portfolio', href: contact.behance, external: true },
  { name: 'About', href: ABOUT },
  {
    name: 'Contact',
    successMessage: 'My email address has been copied!',
    onClick: (setSuccessMessage) => {
      Text.copyToClipboard(contact.email);
      setSuccessMessage();
    },
  },
];
