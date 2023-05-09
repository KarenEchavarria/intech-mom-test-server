import express from 'express';
import { port } from './config/index.js';
import { dbConnection } from './config/dbConnection.js'
import router from './api/users/routes/index.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

dbConnection()

app.get('/', (request, response, error) => {
	response.send('status: ok')
})


app.listen(port, (error) => {

	if (error) {
		console.log('Server Error: Failed');
		process.exit(1);
	}

	console.log(`Server listening in port ${port}`)
})
