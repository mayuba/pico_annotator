(function () {
    'use strict';

    angular
    .module('picoAnnotator')
    .directive('showResume', showResume);

    /** @ngInject */
    
    function showResume() {

        var directive = {

            restrict: 'E',
            replace: true,
            templateUrl: function () {
                return 'app/components/resume/resume.html';
            },
            link: linkFunc


        };

        return directive;

        function linkFunc() {


        }


    }

    /** @ngInject */


})();