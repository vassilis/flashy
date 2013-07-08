//= require jquery
//
//= require_self

var Flashy = Flashy || {};

Flashy.message = function(type, message, replace = false) {
	var container = $('#flash');

	content = ($("<div/>").
		addClass("alert").
		addClass("alert-" + type).
		append($("<button/>").
			attr('type', 'button').
			addClass('close').
			attr('data-dismiss', 'alert').
			html('&times;')).
		append(message));

	if (replace) {
		container.html(content)
	} else {
		container.append(content)
	}
};