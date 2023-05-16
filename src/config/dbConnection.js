import mongoose from "mongoose";

export const dbConnection = () => {
	mongoose
		.connect('mongodb+srv://admin:admin@intechmom.pt69jaf.mongodb.net')
		.then(() => console.log("Database is Connected"))
		.catch((error) => console.error(error));
	// console.log("Database is Connected")
};