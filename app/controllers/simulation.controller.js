
module.exports.home = (req, res) => {
	res.redirect('simulation');
};

module.exports.simulation = (req, res) => {
	res.render('simulation');
};

module.exports.calculate = (req, res) => {
	res.render('simulation');
};
