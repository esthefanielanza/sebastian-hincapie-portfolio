import { useEffect, useState } from 'react';

const useContent = () => {
  const [content, setContent] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    try {
      fetch(`${process.env.PUBLIC_URL}/data/content.json`)
        .then((res) => res.json())
        .then((res) => {
          setContent(res);
        });

      fetch(`${process.env.PUBLIC_URL}/data/contact.json`)
        .then((res) => res.json())
        .then((res) => {
          setContact(res);
        });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, []);

  return { content, contact };
};

export default useContent;
