import Joi from "joi";

const UserRole = {
	Docente: "Soy Docente",
	Estudiante: "Soy Estudiante"
}

// Esquema Registro
export const validateUser = Joi.object({
	name: {
		firstname: Joi.string().uppercase().required().alphanum().min(3).max(32).trim().strict(),
		lastname: Joi.string().uppercase().required().alphanum().min(3).max(32).trim().strict()
	},
	email: Joi.string().required().min(8).max(32).email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
	rol: Joi.string().required().valid(UserRole.Docente, UserRole.Estudiante)
})

// Esquema login
export const schemaLogin = Joi.object({
	email: Joi.string().required().min(8).max(32).email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
	rol: Joi.string().required().valid(UserRole.Docente, UserRole.Estudiante)
})

// Esquema Modificación (se dejan opcionales)
// export const schemaUpdate = Joi.object({
// 	name: {
// 		firstname: Joi.string().uppercase().alphanum().min(3).max(32).trim().strict(),
// 		lastname: Joi.string().uppercase().alphanum().min(3).max(32).trim().strict()
// 	},
// 	email: Joi.string().min(8).max(32).email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
// 	rol: Joi.string().valid(UserRole.Docente, UserRole.Estudiante)
// })