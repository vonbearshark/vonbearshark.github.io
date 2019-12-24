import React from 'react';
import Layout from "../components/layout";
import Img from 'gatsby-image';
import { graphql } from 'gatsby'

import styles from './index.module.css';

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description,
        email,
        github,
        linkedin,
        portfolio {
          description,
          link,
          name,
          repo
        },
      }
    },
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5000) {
          ...GatsbyImageSharpFluid_withWebp,
          presentationWidth
        }
      }
    },
    portfolioPNGs: allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          name,
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

  }
`;


export default ({ data }) => {
  // Hack: How to do this at the GraphQL query level?
  const portfolioPNGs = data.portfolioPNGs.edges.flatMap(({ node }) => node).reduce((imgs, { name, childImageSharp }) => {
    imgs[name] = childImageSharp;
    return imgs;
  }, {});

  return (<Layout>
    <header>
      <div className={styles.profileOuter}>
        <Img
          className={styles.profile}
          title="JJ profile picture"
          alt="JJ profile picture"
          fluid={data.profile.childImageSharp.fluid}
          style={{
            maxWidth: data.profile.childImageSharp.fluid.presentationWidth,
          }}/>
      </div>
      <h1 className={styles.blended}>
        <span className={styles.teal}>j</span>
        <span className={styles.pink}>.</span>
        <span className={styles.yellow}>j</span>
        <span className={styles.pink}>.</span>
      </h1>
    </header>
    <main>
      <section>
        <h2>{data.site.siteMetadata.description}</h2>
        <p>Send me an <a href={`mailto:${data.site.siteMetadata.email}`}>email</a>, connect with me on <a href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}`} target='_blank' rel='noopener noreferrer' alt="JJ's LinkedIn" title="JJ's LinkedIn">LinkedIn</a>, check out my <a href={`https://github.com/${data.site.siteMetadata.github}`} target='_blank' rel='noopener noreferrer' alt="JJ's GitHub" title="JJ's GitHub">GitHub</a>, or download my <a href="jjnaughtonresume.pdf" target='_blank' rel='noopener noreferrer' alt="JJ's resume" title="JJ's resume">resume</a>.</p>
      </section>
      <section>
        <ul>
          {data.site.siteMetadata.portfolio.map(({ description, link, name, repo }) => <li key={`portfolio-${name}`}>
            <h3><a href={link}>{name}</a></h3>
            <Img
              alt={name}
              title={name}
              fixed={portfolioPNGs[name].fixed} />
            <p>{description} {repo && <>Check out the <a href={`https://github.com/${repo}`}>Github repository</a>.</>}</p>
          </li>)}
        </ul>
      </section>
    </main>
  </Layout>);
};
