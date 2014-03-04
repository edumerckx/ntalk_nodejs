module.exports = function(app) {
	var ContatoController = {
		// action index	
		index: function(req, res) {
			var usuario = req.session.usuario;
			var contatos = usuario.contatos;
			var params = {usuario: usuario, contatos: contatos};
			res.render('contatos/index', params);
		},
		// action create
		create: function(req, res) {
			var contato = req.body.contato;
			var usuario = req.session.usuario;
			usuario.contatos.push(contato);
			res.redirect('/contatos');
		},
		// action show 
		show: function(req, res) {
			var id = req.params.id,
			var contato = req.session.usuario.contatos[id];
			var params = {contato: contato, id: id};
			res.render('contatos/show', params);
		},
		// action edit
		edit: function(req, res) {
			var id = req.param.id;
			var usuario = req.session.usuario;
			var contato = usuario.contatos[id];
			var params = {usuario: usuario, contato: contato, id: id};
			res.render('contatos/edit', params);
		},
		// action update
		update: function(req, res) {
			var contato = req.body.contato;
			var usuario = req.session.usuario;
			usuario.contatos[req.params.id] = contato;
			res.redirect('/contatos');
		},
		// action destroy
		destroy: function(req, res) {
			var usuario = req.session.usuario;
			var id = req.params.id;
			usuario.contatos.splice(id, 1);
			res.redirect('/contatos');
		}
	};
	return ContatoController;
}