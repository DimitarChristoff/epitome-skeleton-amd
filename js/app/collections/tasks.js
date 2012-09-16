/*jshint mootools:true */
(function() {
	'use strict';

	// an example collection to be used to represent a task list
	define(['epitome/epitome-collection-sync','models/task'], function(Collection, TaskModel){

		return new Class({

			Extends: Collection,

			model: TaskModel

		});

	});


}());