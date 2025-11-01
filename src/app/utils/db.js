import mongoose from "mongoose";

const connectDb = async () => {
	if (mongoose.connection.readyState >= 1) {
		console.log("db is connected");
		return;
	}
	await mongoose.connect(`mongodb://localhost:27017/product-source`);
	// mongodb://localhost:27017/
};

export default connectDb;
