/* global moment:false */
(function () {
	'use strict';

	angular
	.module('picoAnnotator')
	.constant('API_URL', 'http://localhost:5005/')
	.constant('moment', moment);

})();