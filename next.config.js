/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.myanimelist.net',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
          port: '',
        },
      ],
    },
  }
