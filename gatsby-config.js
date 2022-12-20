module.exports = {
  siteMetadata: {
    title: "Rejoice 2023 | The Salvation Army USA Central Territory Commissioning",
    titleTemplate: "%s · Rejoice 2023",
    description:
      "The Salvation Army USA Central Territory Commissioning.",
      siteUrl: "http://sarejoice.org",
    url: "http://sarejoice.org", // No trailing slash allowed!
    image: "/header-poster.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@SalArmyMidwest",
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-VZTX5TRHQY"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.ico"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
