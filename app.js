'use strict';

const SwaggerExpress = require('swagger-express-mw');
const app = require('./config/server');

var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {

    if (err) { 
        throw err; 
    }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    
    app.listen(port, () => {
  
        console.log(`Server is on being listened on port ${port}`);

    });

});
