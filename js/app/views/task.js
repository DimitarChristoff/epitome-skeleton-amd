/*jshint mootools:true */
(function() {
	'use strict';

	// an example model to be used to represent a task
	define([
		'epitome/epitome-view',
		'text!templates/task.mustache'
	], function(View, TaskItemTemplate){

		return new Class({

			Extends: View,

			options: {
				template: TaskItemTemplate
			}

		});

	});

}());