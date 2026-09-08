import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({ title, description, image, url, structuredData }: SEOProps) {
  const { t, i18n } = useTranslation();
  
  const defaultTitle = t('hero.title') || 'ASI Puri Heritage';
  const defaultDescription = t('hero.tagline') || 'Preserving the rich cultural heritage and magnificent sandstone monuments of Odisha';
  const siteUrl = 'https://asi-puri.vercel.app'; // Update this if domain changes
  
  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/(4) The Ancient Monument of the Black Pagoda/2.JPG`;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Dynamic Language */}
      <html lang={i18n.language || 'en'} />

      {/* Basic Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

