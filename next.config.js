// TODO: Starting state

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable SWC minifier
    swcMinify: true,
    // Enable fast refresh and concurrent features
    fastRefresh: true,
    concurrentFeatures: true,
    // Disable some optimizations in dev mode
    webpack: (config, { dev }) => {
        if (dev) {
            config.optimization.minimize = false;
            config.optimization.minimizer = undefined;
            config.devtool = false;
        }
        return config;
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
    async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        // {
        //      key: 'Content-Security-Policy',
        //      value: "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
        //    },

        {
             key: 'Content-Security-Policy',
             value: "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; frame-src 'self' <URL>",
           },
      ],
    },
  ];
},

}

module.exports = nextConfig
