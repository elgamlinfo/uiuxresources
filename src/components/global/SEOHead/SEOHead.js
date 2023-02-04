/** @format */

import Head from "next/head";
import { globalMeta } from "@/data/static-data";

function SEOHead({
  title = globalMeta.siteName,
  description,
  canonicalUrl,
  ogType,
  ogImgUrl,
  children,
}) {
  return (
    <Head>
      {/*
        	Fundamental head elements important for SEO.
    	*/}
      <title>{title ? title : globalMeta.siteName} </title>
      <meta
        name="description"
        content={description ? description : globalMeta.description}
      />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : globalMeta.siteUrl}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/*
        	Open graph meta tags.
    	*/}
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        content={canonicalUrl ? canonicalUrl : globalMeta.siteUrl}
      />
      <meta property="og:type" content={ogType} />
      <meta
        property="og:description"
        content={description ? description : globalMeta.description}
      />
      <meta
        property="og:image"
        content={ogImgUrl ? ogImgUrl : globalMeta.siteLogo}
      />
      <meta
        property="og:url"
        content={canonicalUrl ? canonicalUrl : globalMeta.siteUrl}
      />

      {children}
    </Head>
  );
}

export default SEOHead;
