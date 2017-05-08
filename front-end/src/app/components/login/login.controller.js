(function () {
    'use strict';

    angular
    .module('picoAnnotator')
    .controller('LoginController', LoginController);

    /** @ngInject */
    LoginController.$inject = ['$auth', '$state'];

    function LoginController($auth, $state) {
        var vm = this;
        vm.$auth = $auth;

// Fonction qui gère l'authentification des utilisateurs
vm.login = function () {
    vm.$auth.login(vm.login.user).then(function (token) {
        vm.$auth.setToken(token);
    });

            //Si l'utilisateur arrive à s'authentifier, on le redirige vers la page d'accueil
            $state.go('home');
        };


    }




})();