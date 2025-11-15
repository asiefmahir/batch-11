/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
};

export default nextConfig;
