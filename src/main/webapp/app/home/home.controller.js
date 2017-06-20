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
                                    { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Παράθυρο φωταγωγού', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'OPEN', recline: 'CLOSED' } },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Εξωτερικό φως εισόδου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },                                    
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 25, humidity: 10 } }
                                ]
                            }, 
                            { 
                                name: "Σαλόνι",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1_AUTO', protocol: 'mqtt', state: { main: 'OPEN', percent: 10 } },
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'OPEN' } },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Ρολό παραθύρου', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Γυάλινος Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Γυάλινος Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Ξύλινος Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Ξύλινος Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Σποτ μπαλκονόπορτα', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Σποτ παραθύρου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Εξωτερικό φως μπαλκονόπορτα', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Εξωτερικό φως παραθύρου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα 1', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Κάμερα 2', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },                                    
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 26, humidity: 10 } }
                                ]
                            }, 
                            { 
                                name: "Κουζίνα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'CLOSED', recline: 'CLOSED' } },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
                                    { name: 'Φως φαγητού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 29, humidity: 18 } }
                                ]
                            }, 
                            { 
                                name: "Μπάνιο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'CLOSED', recline: 'OPEN' } },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 32, humidity: 80 } }
                                ]
                            }, 
                            { name: "WC", items: [ { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' } ] }, 
                            { 
                                name: "Κρεββατοκάμαρα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'CLOSED' } },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 22, humidity: 11 } }
                                ]
                            }, 
                            { 
                                name: "Γραφείο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'DOOR', type: 'WINDOW2R', protocol: 'mqtt', state: { left: 'OPEN', right: 'OPEN', recline: 'CLOSED' } },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 23, humidity: 10 } }
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
                        rooms: [ 
                            { 
                                name: "Χωλ",
                                items: [
                                    { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
                                    { name: 'Εξωτερικό φως εισόδου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 22, humidity: 11 } }
                                ]
                            }, 
                            { 
                                name: "Σαλόνι",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 23, humidity: 10 } }
                                ]
                            }, 
                            { 
                                name: "Τραπεζαρία",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'OPEN' } },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Ρολό παραθύρου', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 24, humidity: 11 } }
                                ]
                            }, 
                            { 
                                name: "Καθιστικό",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 20, humidity: 10 } }
                                ]
                            }, 
                            { 
                                name: "Κουζίνα",
                                items: [
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 28, humidity: 23 } }
                                ]
                            }, 
                            { 
                                name: "Μπάνιο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'OPEN', recline: 'CLOSED' } },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 20, humidity: 17 } }
                                ]
                            }, 
                            { 
                                name: "Κρεββατοκάμαρα",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'CLOSED', recline: 'CLOSED' } },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 24, humidity: 11 } }
                                ]
                            } 
                        ] 
                    } 
                ],
                items: [ { name: 'Συναγερμός', domain: 'ALARM', type: 'ALARM', protocol: 'mqtt' } ] 
            },
            { name: 'Εξοχικό Αλυκή', floors: [ 
                { name: 'Ισόγειο', rooms: [ { name: 'Κουζίνα' }, { name: 'Σαλόνι' }, { name: 'Μπάνιο' } ] }, 
                { name: '1ος', rooms: [ { name: 'Σαλόνι' }, { name: 'Μπάνιο' }, { name: 'WC' }, { name: 'Κρεββατοκάμαρα' }, { name: 'Κρεββατοκάμαρα παιδιών' }, { name: 'Κρεββατοκάμαρα Αθηνάς' }, { name: 'Κρεββατοκάμαρα δυτική' } ] } 
                ] 
            },
            { 
                name: 'Silicontech', 
                floors: [ 
                    { 
                        name: '1ος', 
                        rooms: [ 
                            { 
                                name: "Χωλ",
                                items: [
                                    { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Εξωτερικό φως εισόδου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
                                    { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                ]
                            }, 
                            { 
                                name: "Σαλόνι",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'CLOSED' } },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1_AUTO', protocol: 'mqtt', state: { main: 'OPEN', percent: 10 } },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 27, humidity: 9 } }
                                ]
                            }, 
                            { 
                                name: "Κουζίνα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Παράθυρο διπλό', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'CLOSED' } },
                                    { name: 'Παράθυρο μονό', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'CLOSED', recline: 'OPEN' } },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
                                    { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 29, humidity: 36 } }
                                ]
                            }, 
                            { 
                                name: "Μπάνιο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1', protocol: 'mqtt', state: 'OPEN' },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 28, humidity: 35 } }
                                ]
                            }, 
                            { 
                                name: "Γραφείο",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'COVER', protocol: 'mqtt', state: 'CLOSED' },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1_AUTO', protocol: 'mqtt', state: { main: 'CLOSED', percent: 100 } },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'CAMERA', protocol: 'http' },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 26, humidity: 27 } }
                                ]
                            } 
                        ] 
                    } 
                ],
                items: [ { name: 'Συναγερμός', domain: 'ALARM', type: 'ALARM', protocol: 'mqtt' } ]
            }
        ];

        // console.log( vm.houses );
        vm.isCollapsed = [];        
        for( var i = 0 ; i < vm.houses.length ; i++ )
        {            
            vm.isCollapsed[i] = { 
                house: true,
                filter: { DOOR: true, WINDOW: true, LIGHT: true, CLIMATE: true, COVER: true, ALARM: true, CAMERA: true },
                allChildrenExpanded: false, 
                floor: [] 
            };
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
