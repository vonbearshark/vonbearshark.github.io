const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `JJ Naughton`,
    description: `Full-stack developer and believer in cities, technology, and people.`,
    keywords: `software engineer, web developer`,
    email: `jj@jjnaughton.me`,
    linkedin: `jjnaughton93`,
    github: `vonbearshark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-55454019-1`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JJ Naughton`,
        short_name: `JJ`,
        start_url: `/`,
        background_color: "#df1b56",
        theme_color: "#00bfb3",
        display: `minimal-ui`,
        icon: `${__dirname}/static/icon.jpg`
      },
    },
    `gatsby-plugin-offline`
  ],
};
