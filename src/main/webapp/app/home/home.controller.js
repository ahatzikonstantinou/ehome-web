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
            { 
                name: 'Διαμέρισμα Αντώνη', 
                floors: [ 
                    { 
                        name: '4ος', 
                        rooms: [ 
                            { 
                                name: "Χωλ",
                                items: [
                                    { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt' },
                                    { name: 'Παράθυρο φωταγωγού', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt' }
                                ]
                            }, 
                            { 
                                name: "Σαλόνι",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt' },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'COVER', protocol: 'mqtt' },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER', protocol: 'mqtt' },
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt' },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt' },
                                    { name: 'Ρολό παραθύρου', domain: 'COVER', type: 'ROLLER', protocol: 'mqtt' },
                                    { name: 'Γυάλινος Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Γυάλινος Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Ξύλινος Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Ξύλινος Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Κάμερα 1', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Κάμερα 2', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },                                    
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt' }
                                ]
                            }, 
                            { 
                                name: "Κουζίνα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt' },
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt' },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Φως φαγητού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt' }
                                ]
                            }, 
                            { 
                                name: "Μπάνιο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt' },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt' },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' }
                                ]
                            }, 
                            { name: "WC", items: [ { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' } ] }, 
                            { 
                                name: "Κρεββατοκάμαρα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt' }
                                ]
                            }, 
                            { 
                                name: "Γραφείο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt' },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt' }
                                ]
                            } 
                        ] 
                    } 
                ],
                items: [ { name: 'Συναγερμός', domain: 'ALARM', type: 'ALARM', protocol: 'mqtt' } ]
            },
            { 
                name: 'Διαμέρισμα Ειρήνης', 
                floors: [ 
                    { 
                        name: '3ος', 
                        rooms: [ { name: "Χωλ" }, { name: "Σαλόνι" }, { name: "Τραπεζαρία" }, { name: "Καθιστικό" }, { name: "Κουζίνα" }, { name: "Μπάνιο" }, { name: "Κρεββατοκάμαρα" } ] } 
                ] 
            },
            { name: 'Εξοχικό Αλυκή', floors: [ 
                { name: 'Ισόγειο', rooms: [ { name: 'Κουζίνα' }, { name: 'Σαλόνι' }, { name: 'Μπάνιο' } ] }, 
                { name: '1ος', rooms: [ { name: 'Σαλόνι' }, { name: 'Μπάνιο' }, { name: 'WC' }, { name: 'Κρεββατοκάμαρα' }, { name: 'Κρεββατοκάμαρα παιδιών' }, { name: 'Κρεββατοκάμαρα Αθηνάς' }, { name: 'Κρεββατοκάμαρα δυτική' } ] } 
                ] }
        ];

        // console.log( vm.houses );
        vm.isCollapsed = [];        
        for( var i = 0 ; i < vm.houses.length ; i++ )
        {            
            vm.isCollapsed[i] = { house: true, allChildrenExpanded: false, floor: [] };
            for( var f  = 0 ; f < vm.houses[i].floors.length ; f++ )
            {
                vm.isCollapsed[i].floor[f] = { floor: true, room: [] };
                // console.log( 'House[',i,'].floors[',f,']: ', vm.houses[i].floors[f] );
                for( var r  = 0 ; r < vm.houses[i].floors[f].rooms.length ; r++ )
                {
                    vm.isCollapsed[i].floor[f].room[r] = { room: true };
                }
            }
        }

        vm.expandAllChildren = function( house, expand )
        {
            for( var houseIndex = 0 ; houseIndex < vm.houses.length ; houseIndex++ )
            {
                if( !angular.equals( vm.houses[houseIndex], house ) )
                {
                    continue;
                }
                            
                vm.isCollapsed[ houseIndex ].house = expand;
                vm.isCollapsed[ houseIndex ].allChildrenExpanded = !expand;
                for( var f = 0 ; f < vm.houses[houseIndex].floors.length ; f++ )
                {
                    vm.isCollapsed[houseIndex].floor[f].floor = expand;
                    for( var r  = 0 ; r < vm.houses[houseIndex].floors[f].rooms.length ; r++ )
                    {
                        vm.isCollapsed[houseIndex].floor[f].room[r].room = expand;
                    }
                }
            }
        }
        

        console.log( vm.isCollapsed );
    }
})();
