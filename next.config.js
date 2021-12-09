module.exports = {
  reactStrictMode: true,
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        "ssr": false
      }
    ]
  ],
  images: {
    domains: ['www.wine.com.br', 'img.wine.com.br'],
  },
}
