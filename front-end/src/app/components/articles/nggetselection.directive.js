(function () {
    'use strict';

    angular
    .module('picoAnnotator')
    .directive('ngGetSelection', ngGetSelection);

    /** @ngInject */
    ngGetSelection.$inject = ['$window','$timeout', '$document'];

    function ngGetSelection($window, $timeout, $document) {
        var text = "";

       var directive = {
        restrict: 'A',
        scope: {
            ngGetSelection: '='
        },
        link: linkFunc
    };

    return directive;



    function getSelectedText() {
        var text = "";
        if (typeof $window.getSelection != "undefined") {
            text = $window.getSelection().toString();
        } else if (typeof $document.selection != "undefined" && $document.selection.type == "Text") {
            text = $document.selection.createRange().text;
        }
        return text;

    }



    function linkFunc(scope, element) {


        $timeout(function getSelection() {
            var newText = getSelectedText();

            if (text != newText) {
                text = newText;
                element.val(newText);
                scope.ngGetSelection = newText;
            }

            $timeout(getSelection, 50);
        }, 50);


    }




        /* source: http://jsfiddle.net/4XDR8/1/ 
        http://stackoverflow.com/questions/19099851/bind-to-text-highlighting
        */

    }
})();