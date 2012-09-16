/*jshint mootools:true */
(function() {
	'use strict';

	require.config({

		baseUrl: './js',

		paths: {
			// shortcuts for things
			shared: 'app/shared',
			text: 'vendor/text',
			epitome: 'vendor/epitome',
			models: 'app/models',
			views: 'app/views',
			controllers: 'app/controllers',
			routers: 'app/routers',
			collections: 'app/collections',
			templates: '../templates',
			mustache: 'vendor/mustache'
		},

		deps: [
			// always have the shared object available. just use var app = require('app');
			'shared',
			// proto view to use mustache.
			'vendor/epitome-view-mustache',
			// allow .data() to work on elements
			'vendor/data-mootools'
		],
		urlArgs: "bust=" + (new Date().getTime())
	});

	require(['routers/main'], function(Router){

		var app = require('shared');

		app.router = new Router({
			routes: {
				'': 'dummyHome',
				'#!/': 'home',
				'#!/getting-started': 'tutorial'
			},

			onDummyHome: function(){
				// always hashbang. fuck you.
				this.navigate('#!/');
			},

			onHome: function(){
				console.log('you are on the home page');
			}
		});

	});

}());