
module.exports = (app) => {

	app.get('/', (req, resp) => {
		resp.render('home/index');
	});

};