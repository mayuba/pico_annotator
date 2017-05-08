(function () {
    'use strict';

    angular
    .module('picoAnnotator')
    .controller('RegisterController', RegisterController);

    /** @ngInject */
    RegisterController.$inject = ['$auth'];

    function RegisterController($auth) {
        var vm = this;
        vm.$auth = $auth;


        // utilise le plugin satellizer pour l'enregistrement
        vm.register = function () {

            vm.message = "Merci! Vous êtes maintenant inscrit.";
            vm.$auth.signup(vm.user).then(function (token) {
                vm.$auth.setToken(token);

            });
            //Redirige l'utilisateur vers la page d'accueil
            //$state.go('home');
        };

        
    }

})();