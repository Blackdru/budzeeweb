import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export default function SEO({
  title = "Budzee - Ultimate Memory Game Challenge | Download Free Android APK",
  description = "Test your memory skills with Budzee, the ultimate multiplayer memory game. Challenge friends, win rewards, and become the memory champion! Download free APK for Android.",
  keywords = "memory game, brain training, multiplayer game, android game, free game, memory challenge, puzzle game, brain exercise, cognitive training, mind game",
  canonical = "https://budzee.in/",
  ogImage = "https://budzee.in/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Budzee" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Budzee" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-title" content="Budzee" />
      <meta name="application-name" content="Budzee" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
    </Helmet>
  );
}