(function () {
    'use strict';

    angular
        .module('picoAnnotator')
        .directive('comparePassword', comparePassword);

    /** @ngInject */
    comparePassword.$inject = ['$parse'];

/* Ce code a été adapté à partir de cette source: MEAN Stack and MongoDB Development Techniques - Lynda.com  */

function comparePassword($parse) {

        var directive = {
            require: 'ngModel',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attrs, ngModel) {

            var mainModel = $parse(attrs.comparePassword);
            var secondModel = $parse(attrs.ngModel);

            scope.$watch(attrs.ngModel, function (newValue) {

                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
            });

            scope.$watch(attrs.comparePassword, function (newValue) {

                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
            });

        }









    }


})();