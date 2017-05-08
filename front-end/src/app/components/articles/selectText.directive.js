(function () {
    'use strict';

    angular
    .module('picoAnnotator')
    .directive('selectText', selectText);

    /** @ngInject */
    selectText.$inject = ['$document','$window'];

    function selectText($document,$window) {

        var directive = {
            restrict: 'E',
            controllerAs: 'vm',
            bindToController: true,
            link: linkFunc
        };

        return directive;

        function linkFunc() {
            angular.element.css({
                cursor: 'pointer'
            });
            angular.element.on('dblclick', function (e) {
                var range = $window.getSelection() || $document.getSelection() || $document.selection.createRange();
                var word = range.toString().trim();
                if (word !== '') {
                   // console.log(word);
               }
               e.stopPropagation();
           });
            /* Source: http://stackoverflow.com/questions/26702827/how-can-i-get-word-selection-event-in-angularjs */


        }

        /** @ngInject */




    }
})();