import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		price: { type: Number, required: true },
		image: { type: String, required: true },
		category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
	},
	{ timestamps: true },
);

export default mongoose.models.Product ||
	mongoose.model("Product", productSchema);
