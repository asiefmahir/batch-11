export const getBaseUrl = () => {
	if (process.env.NEXTAUTH_URL) {
		return process.env.NEXTAUTH_URL;
	}

	// fallback

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	return `http://localhost:3000`;
};
