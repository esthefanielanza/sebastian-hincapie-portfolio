import Text from 'helpers/Text';

export const ABOUT = '/about';
export const CASE = '/case/:caseId';
export const HOME = '/';

export const NAV_LINKS = (contact) => [
  { name: 'Art', href: contact.behance, external: true },
  { name: 'About', href: ABOUT },
  {
    name: 'Contact',
    successMessage: 'My email address has been copied!',
    href: '#',
    onClick: (setSuccessMessage) => {
      Text.copyToClipboard(contact.email);
      setSuccessMessage();
    },
  },
];
