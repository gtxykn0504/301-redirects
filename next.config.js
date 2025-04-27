/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "friends.kegongteng.cn",
          },
        ],
        destination: "https://hey.kegongteng.cn/:path*",
        permanent: true,
      },
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
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kegongteng.top",
          },
        ],
        destination: "https://kegongteng.cn/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "robot.kegongteng.cn",
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
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "box.ofhe.cn",
          },
        ],
        destination: "https://pan.ofhe.cn/:path*",
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
