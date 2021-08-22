import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import * as styles from "./index.module.css";
import content from "./index.content.yml";

export default function Index({ data }) {
  const imgsByPath = data?.images?.edges?.reduce(
    (imgMap, { node }) => ({
      ...imgMap,
      [`/src/${node.relativePath}`]: node,
    }),
    {}
  );

  return (
    <Layout>
      <header>
        <div className={styles.profileOuter}>
          <StaticImage
            className={styles.profile}
            title="JJ profile picture"
            alt="JJ profile picture"
            src="../images/profile.jpg"
          />
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
          <ReactMarkdown>{content.metadata.description}</ReactMarkdown>
          <p>
            Send me an <a href={`mailto:${content.metadata.email}`}>email</a>,
            connect with me on{" "}
            <a
              href={`https://www.linkedin.com/in/${content.metadata.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              alt="JJ's LinkedIn"
              title="JJ's LinkedIn"
            >
              LinkedIn
            </a>
            , check out my{" "}
            <a
              href={`https://github.com/${content.metadata.github}`}
              target="_blank"
              rel="noopener noreferrer"
              alt="JJ's GitHub"
              title="JJ's GitHub"
            >
              GitHub
            </a>
            , or download my{" "}
            <a
              href="jjnaughtonresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              alt="JJ's resume"
              title="JJ's resume"
            >
              resume
            </a>
            .
          </p>
        </section>
        <section>
          <ul>
            {content.portfolio.map(
              ({ description, image, link, name, repo }) => (
                <li key={`portfolio-${name}`}>
                  <h3>
                    <a
                      alt={name}
                      href={link}
                      rel="noopener noreferrer"
                      target="_blank"
                      title={name}
                    >
                      {name}
                    </a>
                  </h3>
                  <GatsbyImage
                    alt={name}
                    image={getImage(imgsByPath[image])}
                    title={name}
                  />
                  <ReactMarkdown>
                    {`${description}${
                      repo
                        ? ` Check out the [Github repository](https://github.com/${repo}).`
                        : ''
                    }`}
                  </ReactMarkdown>
                </li>
              )
            )}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery {
    images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
