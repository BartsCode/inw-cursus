/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://codapi.org https://unpkg.com; style-src 'self' 'unsafe-inline' https://codapi.org https://unpkg.com; connect-src 'self' https://codapi.org; frame-src 'self' https://codapi.org;",
              },
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
            ],
          },
        ]
      },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
      return config;
    }
  };
  
  export default nextConfig;
