/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-plugin-env-variables`,
    options: {
      allowList: ["APP_MAPBOX_TOKEN"]
    },
  },{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-173965151-1`,
    },
  },],
}
