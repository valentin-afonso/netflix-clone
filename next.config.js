/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'tmdb.org',
              port: '',
              pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'themoviedb.org',
                port: '',
                pathname: '/**',
              },
              {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/**',
              },
              {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/**',
              },
        ],
    },
};


