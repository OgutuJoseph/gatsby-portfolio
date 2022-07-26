/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Gatsby Portfolio',
    description: 'This is a sample portfolio website by Gatsby Javasacript',
    copyright: 'This website is copyright © 2022. Josef.',
    contact: 'josef@me.com'
  }
}
