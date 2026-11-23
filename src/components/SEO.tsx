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
  
  const siteUrl = 'https://asipuricircle.in';
  const defaultTitle = t('hero.title') || 'ASI Puri Circle - Archaeological Survey of India';
  const defaultDescription = t('hero.tagline') || 'Official web portal of Archaeological Survey of India (ASI), Puri Circle. Custodian of 40 Centrally Protected Monuments and 3 Site Museums in Odisha.';
  
  const seoTitle = title 
    ? (title.includes('ASI Puri') ? title : `${title} | ASI Puri Circle`) 
    : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${encodeURI(image)}`) 
    : `${siteUrl}/asi_logo.jpg.jpeg`;
  const seoUrl = url 
    ? (url.startsWith('http') ? url : `${siteUrl}${url}`) 
    : siteUrl;

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
      <meta property="og:site_name" content="Archaeological Survey of India, Puri Circle" />
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
