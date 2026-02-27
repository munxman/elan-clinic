import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  schema?: Record<string, unknown>;
  ogImage?: string;
  ogType?: string;
  locale?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  schema,
  ogImage = 'https://elanclinic.ee/og-image.jpg',
  ogType = 'website',
  locale = 'en_EE',
  noindex = false,
}: SEOHeadProps) => {
  const canonical = canonicalUrl.replace(/\/+$/, '');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Élan Clinic" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="author" content="Élan Clinic — Sentifoli & Lindström OÜ" />
      <meta name="geo.region" content="EE-37" />
      <meta name="geo.placename" content="Tallinn" />
      <meta name="geo.position" content="59.4214;24.8065" />
      <meta name="ICBM" content="59.4214, 24.8065" />

      <link rel="alternate" hrefLang="en" href={canonical} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
