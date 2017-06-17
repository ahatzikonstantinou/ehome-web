(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .controller('HomeController', HomeController);

    // HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];
    HomeController.$inject = ['$scope', '$state'];

    // function HomeController ($scope, Principal, LoginService, $state) {
    function HomeController ($scope, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = true; //null;
        // vm.login = LoginService.open;
        // vm.register = register;
        // $scope.$on('authenticationSuccess', function() {
        //     getAccount();
        // });

        // getAccount();

        // function getAccount() {
        //     Principal.identity().then(function(account) {
        //         vm.account = account;
        //         vm.isAuthenticated = Principal.isAuthenticated;
        //     });
        // }
        // function register () {
        //     $state.go('register');
        // }

        vm.houses = [
            { name: 'Διαμέρισμα Αντώνη', floors: [ { name: '4ος', rooms: [ { name: "Χωλ" }, { name: "Σαλόνι" }, { name: "Κουζίνα" }, { name: "Μπάνιο" }, { name: "WC" }, { name: "Κρεββατοκάμαρα" }, { name: "Γραφείο" } ] } ] },
            { name: 'Διαμέρισμα Ειρήνης', floors: [ { name: '3ος', rooms: [ { name: "Χωλ" }, { name: "Σαλόνι" }, { name: "Τραπεζαρία" }, { name: "Καθιστικό" }, { name: "Κουζίνα" }, { name: "Μπάνιο" }, { name: "Κρεββατοκάμαρα" } ] } ] },
            { name: 'Εξοχικό Αλυκή', floors: [ 
                { name: 'Ισόγειο', rooms: [ { name: 'Κουζίνα' }, { name: 'Σαλόνι' }, { name: 'Μπάνιο' } ] }, 
                { name: '1ος', rooms: [ { name: 'Σαλόνι' }, { name: 'Μπάνιο' }, { name: 'WC' }, { name: 'Κρεββατοκάμαρα' }, { name: 'Κρεββατοκάμαρα παιδιών' }, { name: 'Κρεββατοκάμαρα Αθηνάς' }, { name: 'Κρεββατοκάμαρα δυτική' } ] } 
                ] }
        ];

        vm.isCollapsed = [];
        for( var i = 0 ; i < vm.houses.length ; i++ )
        {
            vm.isCollapsed[i] = { house: true, floor: [] };
            for( var f  = 0 ; f < vm.houses[i].floors.length ; f++ )
            {
                vm.isCollapsed[i].floor[f] = true;
            }
        }

        vm.floorIsCollapsed = function( houseIndex, floorIndex ) {
            return vm.isCollapsed[ houseIndex ].floor[ floorIndex ] && vm.houses[ houseIndex ].floors.length > 1; 
        }

        console.log( vm.isCollapsed );
    }
})();
