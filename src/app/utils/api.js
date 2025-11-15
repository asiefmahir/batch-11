export const getBaseUrl = () => {
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	if (process.env.NEXTAUTH_URL) {
		return process.env.NEXTAUTH_URL;
	}

	// fallback

	return `http://localhost:3000`;
};
