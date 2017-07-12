const app = require('./config/server');
const port = 3000;
const SwaggerExpress = require('swagger-express-mw');
const config = {appRoot: __dirname}; //required config

SwaggerExpress.create(config, (err, swaggerExpress) => {

	if (err){
		throw err;
	}

	let server;

	swaggerExpress;register(app);

	server = app.listen(port, () => {
		console.log(`Server loaded on port ${port}`);
	});

});

