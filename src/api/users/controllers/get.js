import User from "../../../models/user.js";

const getAllUsers = async (request, response, next) => {
	try {
		const arrayUsers = await User.find();
		return response.status(200).json({
			listaUsers: arrayUsers
		})
	} catch (error) {
		response.status(400).json({
			error
		})
	}
}

//busqueda con :id
const getUserById = async (request, response) => {
	const id = request.params.id
	const userid = await User.findById(id)
	if (userid) {
		return response.status(200).json({
			data: userid
		})
	} else {
		response.status(400).json({
			message: "User Not Found"
		})
	}
}

export { getAllUsers, getUserById }