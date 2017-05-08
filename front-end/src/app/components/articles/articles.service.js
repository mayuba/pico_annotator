(function () {
    'use strict';

    angular.module('picoAnnotator').factory('articles', articles);
    /* Service qui lire le fichier data1.json qui contient les articles*/

    articles.$inject = ['$http'];

    function articles($http) {
        return {
            getArticles: function () {
                return $http.get('app/data/corpus/data1.json');
            }
        };
    }
}());