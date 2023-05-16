import User from "../../../models/user.js";

const deleteUser = async (request, response, next) => {
	const id = request.params.id
	const user = User(request.body);
	try {
		const userDelete = await User.findByIdAndDelete(id);
		response.status(200).json({
			delete: ("Ok"),
			data: userDelete
		})
	} catch (error) {
		next(error);
	};
}

export { deleteUser };
