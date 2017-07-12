const app = require('./config/server');
const port = 3000;

var server = app.listen(port, () => {
	console.log(`Server loaded on port ${port}`);
});