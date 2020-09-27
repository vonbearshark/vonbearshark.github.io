const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `JJ Naughton`,
    description: `Nobody wins unless everybody wins.`,
    keywords: `software engineer, web developer`,
    email: `jj@jjnaughton.me`,
    linkedin: `jjnaughton93`,
    github: `vonbearshark`,
    portfolio: [{
      description: 'A custom website for the Twin Cities-based pet services small business.',
      link: 'https://www.eringodog.com/',
      name: 'Erin Go Dog'
    },
    {
      description: 'A custom website for the Minnesota-based dog walking small business.',
      link: 'https://www.minnesotadogpack.com/',
      name: 'Minnesota Dog Pack'
    },
    {
      description: 'Top 10 Reasons Only 90s Kids Believe What This Chrome Browser Extension Does!',
      link: 'https://chrome.google.com/webstore/detail/infinite-viral/gejghfapdoblkdeghocaggoalocccacg',
      name: 'Infinite Viral Chrome Extension',
      repo : 'vonbearshark/infinite-viral-extension'
    },
    {
      description: 'A web visualization for open civic data points on the University of Pittsburgh campus.',
      link: 'https://pittcsc.org/PantherView/',
      name: 'Panther View',
      repo: 'Pitt-CSC/PantherView'
    },
    {
      description: 'A web-GL-based molecular visualizations interface for Pitt Quantum Institute molecular data.',
      link: 'https://pqr.pitt.edu/',
      name: 'Pitt Quantum Repository',
      repo: 'pittquantum/PittQuantumRepository'
    },
    {
      description: 'An Array of Things sensor data pipeline and visualization dashboard.',
      link: 'http://plenar.io/explore/discover',
      name: 'Plenar.io',
      repo: 'UrbanCCD-UChicago/plenario-explorer'
    },
    {
      description: 'An extendable, pure-SVG donut chart React component npm module.',
      link: 'https://www.npmjs.com/package/react-donut-chart',
      name: 'React SVG Donut Chart',
      repo: 'vonbearshark/react-donut-chart'
    }]
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
