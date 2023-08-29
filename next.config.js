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
}

module.exports = nextConfig
