import User from "../../../models/user.js";
import { validateUser } from "../validations/validation.js";

const createUser = async (request, response, next) => {

	//Registro
	const { error } = validateUser.validate(request.body);
	if (error) {
		return response.status(400).json({ error: error.details[0].message })
	}

	//correo unico
	const emailRegistered = await User.findOne({ email: request.body.email });
	if (emailRegistered) {
		return response.status(400).json({ error: "Email Registered" })
	}

	//Creación
	const user = new User(request.body);

	try {
		const Cluster0 = await user.save();
		response.status(200).json({
			saved: ("Ok"),
			data: Cluster0
		})

	} catch (error) {
		next(error);
	};
}

export { createUser };