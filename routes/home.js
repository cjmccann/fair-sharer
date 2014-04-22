exports.root = function(req, res){
/*	res.contentType('text/html');
	var data = ('home');
	res.header('Content-Length', data.length);
	res.end(data);
*/
	res.render('home', {title: 'HOMEPAGE'});

};