import { Helmet } from "react-helmet-async";

const SEO = ({ meta }) => (
  <Helmet>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={meta.url} />
    <meta property="og:image" content={meta.image} />
    <meta name="twitter:card" content={meta.twitterCard} />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
    <meta name="twitter:image" content={meta.image} />
  </Helmet>
);

export default SEO;
