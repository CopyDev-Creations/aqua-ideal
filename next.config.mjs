/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV == 'production'

const nextConfig = {
    basePath: isProduction ? "/aqua-ideal" : "",
    output: "export",
    reactStrictMode: false,
    images: { unoptimized: true }
};

export default nextConfig;
