const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  swcMinify: true, // Enable SWC-based JavaScript minification for faster builds
  webpack(config) {
    // Handling .glb and .gltf files (3D models) with file-loader
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/models/',
            publicPath: '/_next/static/models/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    // Returning the modified webpack config
    return config;
  },
  images: {
    // Enabling automatic image optimization with Next.js Image component
    domains: ['your-cdn-domain.com'], // Add your CDN domain for optimized image loading
  },
  experimental: {
    // Enable Rust compiler for faster builds (useful for large projects)
    rustCompiler: true,
  },
  reactStrictMode: true, // Enable React Strict Mode for improved error handling and performance
});
