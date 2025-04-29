/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

// Disables Chromecast API attempts completely if needed
if (typeof window !== 'undefined') {
    window.__onGCastApiAvailable = function() {};
  }
