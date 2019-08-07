module.exports = {
  siteMetadata: {
    title: 'Unstoppable Domains Documentation',
    author: `Unstoppable Domains`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {path: `${__dirname}/src/pages`, name: 'docs'},
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // "gatsby-remark-copy-linked-files",
          // "gatsby-remark-images",
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // showLineNumbers: false,
              // noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}
