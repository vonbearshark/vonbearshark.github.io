import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { useStaticQuery, graphql } from "gatsby"

import './layout.module.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords,
            email,
          }
        }
      }
    `
  );

  return <>
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta property='og:title' content={data.site.siteMetadata.title}/>
      <meta property='og:description' content={data.site.siteMetadata.description}/>
      <meta property='og:type' content='website'/>
      <meta name='description' content={data.site.siteMetadata.description}/>
      <meta name='keywords' content={data.site.siteMetadata.keywords}/>
      <link rel='shortcut icon' href={withPrefix('favicon.ico')} type='image/x-icon'/>
    </Helmet>
    {children}
  </>;
};

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
