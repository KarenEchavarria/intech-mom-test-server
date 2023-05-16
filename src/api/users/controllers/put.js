import User from "../../../models/user.js";

const updateUser = async (request, response, next) => {
	const id = request.params.id
	// const { error } = schemaUpdate.validate(request.body);
	// if (error) {
	// 	return response.status(400).json({ error: error.details[0].message })
	// }

	const user = User(request.body);
	try {
		const userUpdate = await User.findByIdAndUpdate(id, request.body, { new: true });
		response.status(200).json({
			update: ("Ok"),
			data: userUpdate
		})
	} catch (error) {
		next(error);
	};
}

export { updateUser };