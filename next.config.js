/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize memory usage
  experimental: {
    // Reduce memory usage during build
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Disable some features that consume memory
    optimizeCss: false,
    scrollRestoration: false,
  },
  
  // Webpack configuration to reduce memory usage
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Reduce memory usage in development
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 500,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      };
      
      // Disable filesystem cache to reduce memory usage
      config.cache = false;
      
      // Reduce memory usage by limiting parallel processing
      config.parallelism = 1;
      
      // Optimize memory usage
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Create a single vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Create a common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Optimize images
  images: {
    formats: ['image/webp'],
    unoptimized: true, // Reduce memory usage
  },
  
  // Reduce bundle size
  compress: true,
  
  // Allow cross-origin requests in development
  allowedDevOrigins: ['172.18.100.76', 'localhost'],
  
  // Disable some features to reduce memory usage
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig; 