import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";

import content from "../pages/index.content.yml";

import "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{content.metadata.title}</title>
        <meta property="og:title" content={content.metadata.title} />
        <meta
          property="og:description"
          content={content.metadata.description}
        />
        <meta property="og:type" content="website" />
        <meta name="description" content={content.metadata.description} />
        <meta name="keywords" content={content.metadata.keywords} />
        <link
          rel="shortcut icon"
          href={withPrefix("favicon.ico")}
          type="image/x-icon"
        />
      </Helmet>
      {children}
    </>
  );
}
