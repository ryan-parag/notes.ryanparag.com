module.exports = {
  env: {
    REACT_APP_MAILCHIMP_URL: process.env.REACT_APP_MAILCHIMP_URL,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE: process.env.AIRTABLE_BASE
  },
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
