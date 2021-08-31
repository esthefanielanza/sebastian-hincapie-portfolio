import React from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import Routing from 'routes/Routing';

const DESCRIPTION = 'Hi, I’m Sebastian, a Product Designer at Zemoga.  My passion is to help companies create amazing digital products to connect with their users.';
const TITLE = 'Sebastian Hincapie';
const IMAGE = 'https://www.sebastianhincapie.com/static/verizon1/home.png';

function App() {
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESCRIPTION} />
        <meta itemProp="image" content={IMAGE} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.sebastianhincapie.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE} />
      </Helmet>
      <div className="App">
        <Routing />
      </div>
    </main>

  );
}

export default App;
