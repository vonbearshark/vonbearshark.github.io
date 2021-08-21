module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-55454019-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JJ Naughton`,
        short_name: `JJ`,
        start_url: `/`,
        background_color: "#df1b56",
        theme_color: "#00bfb3",
        display: `minimal-ui`,
        icon: `${__dirname}/static/icon.jpg`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
};
