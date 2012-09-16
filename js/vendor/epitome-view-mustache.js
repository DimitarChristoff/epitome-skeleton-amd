(function(exports){

	'use strict';

	require(['epitome/epitome-view','mustache'], function(View, Mustache){
		// prototype it for everyone to use mustache in every view.

		View.implement({
			template: function(data, template) {
				// refactor this to work with any other template engine in your constructor
				template = template || this.options.template;

				return Mustache.render(template, data);
			}
		});

	});
}(this));