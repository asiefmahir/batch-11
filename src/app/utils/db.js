// import mongoose from "mongoose";

// const connectDb = async () => {
// 	if (mongoose.connection.readyState >= 1) {
// 		console.log("db is connected");
// 		return;
// 	}
// 	await mongoose.connect(`mongodb://localhost:27017/product-source`);
// 	// mongodb://localhost:27017/
// };

// export default connectDb;

import mongoose from "mongoose";

// const MONGODB_URI = `mongodb://localhost:27017/next-e-com`;

const getMongoURI = () => {
	if (process.env.NODE_ENV === "development") {
		return (
			process.env.MONGODB_DEV_URI ||
			"mongodb://localhost:27017/product-source"
		);
	}

	return process.env.MONGODB_URI; // production
};

const MONGODB_URI = getMongoURI();

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			maxPoolSize: 10, // Maintain up to 10 socket connections
			serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
			socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		};

		cached.promise = mongoose
			.connect(MONGODB_URI, opts)
			.then((mongoose) => {
				console.log("✅ Connected to MongoDB");
				return mongoose;
			});
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		console.error("❌ MongoDB connection error:", e);
		throw e;
	}

	return cached.conn;
};

export default connectDb;
