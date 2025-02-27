/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.dummyjson.com",
          },
        ],
      },
      async redirects() {
        return [
          {
            source: "/",
            destination: "/products",
            permanent: true, // 301 Redirect (SEO friendly)
          },
        ];
      },
};

export default nextConfig;
