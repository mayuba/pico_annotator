(function () {
    'use strict';

    angular
        .module('picoAnnotator')
        .controller('NavbarController', NavbarController);

    /** @ngInject */
    NavbarController.$inject = ['$auth'];

    function NavbarController($auth) {
        var vm = this;
        vm.$auth = $auth;

        vm.isAuthenticated = vm.$auth.isAuthenticated;



        vm.logout = function () {
            vm.$auth.logout();
        };

    }

})();