(function() {
    'use strict';
    angular.module('picoAnnotator').controller('ArticleController', ArticleController);

    /** @ngInject */
    ArticleController.$inject = ['$window', '$document', '$http', '$stateParams', 'articles', 'uima'];

    function ArticleController($window, $document, $http, $stateParams, articles, uima) {
        var vm = this;
        vm.$http = $http;
        vm.uima = uima;
        vm.$document = $document;
        articles.getArticles().then(function(response) {
            vm.articleList = response.data.article;
            vm.articleIdList = [];
            vm.articleList.forEach(function(item) {
                var initialArticleId = item.Id;
                if($stateParams.item === initialArticleId) {
                    vm.articleIdList.push(item);
                }

                if(!vm.initialArticleId) {
                    vm.initialArticleId = initialArticleId;
                }
            });
        });


        //Envoie des annotations vers le server
        vm.postAnnotation = function() {
            vm.$http.post('http://localhost:5005/api/annotation', {
                text: vm.annotData.text,
                articleId: vm.annotData.Id,
                Population: vm.annotData.population,
                Intervention: vm.annotData.intervention,
                Comparison: vm.annotData.comparison,
                Outcome: vm.annotData.outcome,
                Background: vm.annotData.background
            });
        };

        /**uima json: fichier json format uima */
        vm.uima.getUimaDetails().then(function(response1) {
            vm.uimaList = response1.data.CAS;
            vm.sentenceList = response1.data.CAS.Sentence;
            vm.wordTokenList = response1.data.CAS.WordToken;          
            //console.log(vm.uimaList);
        });
        
    }
})();