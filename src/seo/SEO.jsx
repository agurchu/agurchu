// src/seo/SEO.jsx
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, image = '/og-image.jpg' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SEO;