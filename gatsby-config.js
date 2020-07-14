module.exports = {
  siteMetadata: {
    title: "Muhabura Tech Group Ltd.",
    description: "We provide web and mobile development services",
    url: "https://muhaburatechgroup.com",
    twitterUsername: "@muhaburatechgroup",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
  ],
};
