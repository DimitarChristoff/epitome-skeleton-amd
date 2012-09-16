/*jshint mootools:true */
(function() {
	'use strict';

	define([
		'epitome/epitome-router',
		'collections/tasks'
	], function(Router, Tasks){

		var app = require('shared');

		return new Class({

			Extends: Router,

			// example methods the router instance can call
			showTasks: function(){
				app.tasks = app.tasks || new Tasks([]);


			}

		});

	});
}());