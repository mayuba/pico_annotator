(function () {
    'use strict';

    angular.module('picoAnnotator').factory('uima', uima);
    /* Service qui lire le fichier data1.json qui contient les articles*/

    uima.$inject = ['$http'];

    function uima($http) {
        return {
            getUimaDetails: function () {
                return $http.get('app/data/corpus/gt.json');
            }
        };
    }
}());