/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kegongteng.cn",
          },
        ],
        destination: "https://kegongteng.cn/:path*",
        permanent: true,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "my.spircape.com",
          },
        ],
        destination: "https://myapps.microsoft.com/?whr=spircape.com",
        permanent: true,
      },
      {
        source: "/410photo",
        has: [
          {
            type: "host",
            value: "go.ofhe.cn",
          },
        ],
        destination: "https://box.zhhi.cn/s/5Qt9",
        permanent: true,
      },
      {
        source: "/159-20250930",
        has: [
          {
            type: "host",
            value: "go.ofhe.cn",
          },
        ],
        destination: "https://box.zhhi.cn/s/JGSV",
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
