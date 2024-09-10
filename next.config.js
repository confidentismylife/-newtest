/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    env: {
        API_ADDRESS: isProd 
            ? "https://line-art-dog-boke-pjw1.vercel.app/api" 
            : "http://localhost:3000/api"
    },
    swcMinify: true,  // 使用 SWC 进行代码压缩
}

module.exports = withVideos(nextConfig);
