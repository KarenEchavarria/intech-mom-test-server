import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { port } from './config/index.js';
import { dbConnection } from './config/dbConnection.js'
import router from './api/users/routes/index.js'
import bodyParser from 'body-parser';
import { openApiSpecification } from './config/swagger.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

dbConnection()

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (request, response, error) => {
	response.send('status: ok')
})

app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(openApiSpecification))

app.listen(port, (error) => {

	if (error) {
		console.log('Server Error: Failed');
		process.exit(1);
	}

	console.log(`Server listening in port ${port}`)
})
