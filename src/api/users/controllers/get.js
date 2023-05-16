import User from "../../../models/user.js";

/**
 * @openapi
 * /users:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
const getAllUsers = async (request, response, next) => {
	try {

		const { rol, email } = request.query;

		const filters = {
			...rol && { rol },
			...email && { email }
		};

		console.log('filters', filters)

		const arrayUsers = await User.find(filters);

		return response.status(200).json(arrayUsers)
	} catch (error) {
		response.status(400).json({
			error
		})
	}
}

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */const getUserById = async (request, response) => {
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