(function () {
    'use strict';

    angular
        .module('picoAnnotator')
        .controller('MainController', MainController);

    /** @ngInject */
    MainController.$inject = ['$http', 'articles'];



    function MainController($http, articles) {
        var vm = this;
        vm.$http = $http;

        // On recupe les donnees a partir du server
        vm.getPicoAnnotatedText = function () {

            vm.$http.get('http://localhost:5005/api/annotation').then(function (result) {
                vm.listAnnotatedText = result.data;
            });

        };

        vm.getPicoAnnotatedText();



        vm.articleIdList = null;
        vm.articleTitleList = null;
        vm.articleIdTitleList = null;

        articles.getArticles().then(function (response) {
            vm.articleList = response.data.article;
            /* tableau temporaire qui contient les numéros d'articles*/
            var tabTemp = [];
            var tabTemp2 = [];


            vm.articleList.forEach(function (item) {
                var articleId = item.Id;

                if (tabTemp.indexOf(articleId) === -1) {
                    tabTemp.push(articleId);

                }


            });


            vm.articleIdList = tabTemp;


            vm.articleList.forEach(function (item1) {
                var articleTitle = item1.title;

                if (tabTemp2.indexOf(articleTitle) === -1) {
                    tabTemp2.push(articleTitle);
                }


            });

            vm.articleTitleList = tabTemp2;
            //Un map pour lire les id et le titles
            vm.articleIdTitleList = vm.articleIdList.map(function (value, index) {
                return {
                    item: value,
                    value: vm.articleTitleList[index]
                };
            });

        });

        


    } //end controller







})();