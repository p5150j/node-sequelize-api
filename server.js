var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var PORT =process.env.PORT || 3000 ;

var cors = require('cors');

var app = express();



app.use(cors());

var db = require ('./models');
var apiRoutes = require ('./app/routes/apiRoutes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json( {type: 'application/vnd.api+json'} ));

app.use(express.static("app/public"));


apiRoutes(app, db);

db.sequelize.sync().then(function (){


app.listen(PORT, function (){
	console.log('Im on port ${PORT}');
});


});
