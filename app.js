const express= require('express');
const chalk= require('chalk');
const debug = require('debug')('app');
const morgan= require('morgan');
const path= require('path');
const port = process.env.PORT || 3001;


const app= express();
const host = 'http://localhost:'+ port;
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
// if it is not found in public add below to make sure
app.use('/css',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')));

app.set('views', './src/views');
app.set('view engine', 'ejs');// ejs dosyalari

const nav= [
	{link:'/books',title:'Books'},
	{link:'/authors', title:'Authors'} 
]

const bookRouter= require('./src/routes/bookRoutes')(nav);//comes from const nav
app.use('/books', bookRouter);

app.get('/', (req, res)=> {
	/* res.send('hello from app'); */
	/* res.sendFile(__dirname +'/views/index.html') */
	/* res.sendFile(path.join(__dirname, 'views/index.html')); */// path.join slash/ ve + ortadan kaldiriyor
	res.render('index', 
		{
			nav:[
				{link:'/books',title:'Books'},
				{link:'/authors', title:'Authors'} 
			], 
			// eslint-disable-next-line indent
		title:'Library'
		}
	);
});

app.listen(port, function(){
	debug(`listen port ${chalk.green(port)} on ${host} `);
});