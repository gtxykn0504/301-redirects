/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "friends.kegongteng.cn/:path*",
        destination: "https://hey.kegongteng.cn/:path*",
        permanent: true,
      },
      {
        source: "www.kegongteng.cn/:path*",
        destination: "https://kegongteng.cn/:path*",
        permanent: true,
      },
      {
        source: "kegongteng.top/:path*",
        destination: "https://kegongteng.cn/:path*",
        permanent: true,
      },
      {
        source: "robot.kegongteng.cn/:path*",
        destination: "https://kegongteng.cn/:path*",
        permanent: true,
      },
      {
        source: "my.spircape.com",
        destination: "https://myapps.microsoft.com/?whr=spircape.com",
        permanent: true,
      },
      {
        source: "box.ofhe.cn/:path*",
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
