(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .controller('HomeController', HomeController);

    // HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];
    HomeController.$inject = ['$scope', '$state', 'MqttClient', 'Door1', 'Window1R', 'Light1', 'TemperatureHumidity', 'Door2R', 'Net', 'Roller1_Auto', 'Window2R', 'Roller1', 'Light2', 'Alarm', 'IPCamera', 'IPCameraPanTilt', 'Houses', 'MotionCamera', 'MotionCameraPanTilt' ];

    // function HomeController ($scope, Principal, LoginService, $state) {
    function HomeController ($scope, $state, MqttClient, Door1, Window1R, Light1, TemperatureHumidity, Door2R, Net, Roller1_Auto, Window2R, Roller1, Light2, Alarm, IPCamera, IPCameraPanTilt, Houses, MotionCamera, MotionCameraPanTilt ) {
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

        vm.houses = Houses.data;
/*        //ahat: NOTE: use strings for json messages when publishing topics from mqtt devices with tokens and string literals in double quotes like '{"main": "OPEN", "recline":"CLOSED"}'
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
                                    { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', device: new Door1( 'A/4/H/DOOR/D', { main: 'OPEN' } ) },
                                    { name: 'Παράθυρο φωταγωγού', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', device: new Window1R( 'A/4/H/WINDOW/W', { main: 'OPEN', recline: 'CLOSED' } ) },
                                    { name: 'Σίτα φωταγωγού', domain: 'COVER', type: 'NET', protocol: 'mqtt', device: new Net( 'A/4/H/COVER/W', { main: 'CLOSED' } ) },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/H/LIGHT/LC/state', 'A/4/H/LC/set', { main: 'OFF' } ) },
                                    { name: 'Εξωτερικό φως εισόδου', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/H/LIGHT/LO/state', 'A/4/H/LO/set', { main: 'OFF' } ) },                                    
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERAPANTILT', protocol: 'http', device: new IPCameraPanTilt( 'http://192.168.1.79/webcam/', 'videostream.cgi?', 'decoder_control.cgi?command=6', 'decoder_control.cgi?command=4', 'decoder_control.cgi?command=0', 'decoder_control.cgi?command=2', 'decoder_control.cgi?command=1' )  },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', device: new TemperatureHumidity( 'A/4/H/TH', { temperature: 25, humidity: 10 } ) }
                                ]
                            }, 
                            { 
                                name: "Σαλόνι",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', device: new Door2R( 'A/4/L/DOOR/D', { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } ) },
                                    { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'NET', protocol: 'mqtt', device: new Net( 'A/4/L/COVER/NB', { main: 'CLOSED' } ) },
                                    { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1_AUTO', protocol: 'mqtt', device: new Roller1_Auto( 'A/4/L/COVER/RB/state', 'A/4/L/COVER/RB/set', { main: 'OPEN', percent: 10 } ) },
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt', device: new Window2R( 'A/4/L/WINDOW/W', { left: 'CLOSED', right: 'CLOSED', recline: 'OPEN' } ) },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'NET', protocol: 'mqtt', device: new Net( 'A/4/L/COVER/NW', { main: 'CLOSED' } ) },
                                    { name: 'Ρολό παραθύρου', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', device: new Roller1( 'A/4/L/COVER/RW', { main: 'CLOSED' } ) },
                                    { name: 'Γυάλινος Πολυέλεος', domain: 'LIGHT', type: 'LIGHT2', protocol: 'mqtt', device: new Light2( 'A/4/L/LIGHT/GCH/state', 'A/4/L/LIGHT/GCH/set', { left: 'OFF', right: 'ON' } ) },
                                    { name: 'Ξύλινος Πολυέλεος', domain: 'LIGHT', type: 'LIGHT2', protocol: 'mqtt',  device: new Light2( 'A/4/L/LIGHT/GCH/state', 'A/4/L/LIGHT/GCH/set', { left: 'OFF', right: 'OFF' } ) },
                                    { name: 'Σποτ μπαλκονόπορτα', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/L/LIGHT/LD/state', 'A/4/L/LIGHT/LD/set', { main: 'OFF' } ) },
                                    { name: 'Σποτ παραθύρου', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/L/LIGHT/LW/state', 'A/4/L/LIGHT/LW/set', { main: 'OFF' } ) },
                                    { name: 'Εξωτερικό φως μπαλκονόπορτα', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt',device: new Light1( 'A/4/L/LIGHT/LOB/state', 'A/4/L/LIGHT/LOB/set', { main: 'OFF' } ) },
                                    { name: 'Εξωτερικό φως παραθύρου', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/L/LIGHT/LOW/state', 'A/4/L/LIGHT/LOW/set', { main: 'OFF' } ) },
                                    { name: 'Κάμερα 1', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http', device: new IPCamera( 'http://192.168.1.79/webcam' ) },
                                    { name: 'Κάμερα 2', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http', device: new IPCamera( 'http://192.168.1.79/webcam' ) },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', device: new TemperatureHumidity( 'A/4/L/TH', { temperature: 26, humidity: 10 } ) }
                                ]
                            }, 
                            { 
                                name: "Κουζίνα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', device: new Door1( 'A/4/K/DOOR/D', { main: 'OPEN' } ) },
                                    { name: 'Παράθυρο νεροχύτη', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', device: new Window1R( 'A/4/K/WINDOW/WS', { main: 'OPEN', recline: 'CLOSED' } ) },
                                    { name: 'Σίτα παραθύρου νεροχύτη', domain: 'COVER', type: 'NET', protocol: 'mqtt', device: new Net( 'A/4/K/COVER/NWS', { main: 'CLOSED' } ) },
                                    { name: 'Παράθυρο φωταγωγού', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', device: new Window2R( 'A/4/Κ/WINDOW/WL', { left: 'CLOSED', right: 'CLOSED', recline: 'OPEN' } ) },
                                    { name: 'Σίτα παραθύρου φωταγωγού', domain: 'COVER', type: 'NET', protocol: 'mqtt', device: new Net( 'A/4/K/COVER/NWL', { main: 'CLOSED' } ) },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/K/LIGHT/LB/state', 'A/4/K/LIGHT/LB/set', { main: 'OFF' } ) },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/K/LIGHT/LC/state', 'A/4/K/LIGHT/LC/set', { main: 'OFF' } ) },
                                    { name: 'Φως φαγητού', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/K/LIGHT/LD/state', 'A/4/K/LIGHT/LD/set', { main: 'OFF' } ) },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http', device: new IPCamera( 'http://192.168.1.79/webcam' ) },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', device: new TemperatureHumidity( 'A/4/K/TH', { temperature: 29, humidity: 18 } ) }
                                ]
                            }, 
                            { 
                                name: "Μπάνιο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', device: new Window1R( 'A/4/B/WINDOW/W', { main: 'OPEN', recline: 'CLOSED' } ) },
                                    { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'NET', protocol: 'mqtt', device: new Net( 'A/4/B/COVER/NW', { main: 'CLOSED' } ) },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/B/LIGHT/L/state', 'A/4/B/LIGHT/L/set', { main: 'OFF' } ) },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', device: new TemperatureHumidity( 'A/4/B/TH', { temperature: 32, humidity: 80 } ) }
                                ]
                            }, 
                            { name: "WC", items: [ { name: 'Φως', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/WC/L/state', 'A/4/WC/L/set', { main: 'OFF' } ) } ] }, 
                            { 
                                name: "Κρεββατοκάμαρα",
                                items: [
                                    { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', device: new Door2R( 'A/4/BR/DOOR/D', { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } ) },
                                    { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/BR/LIGHT/LC/state', 'A/4/BR/LIGHT/LC/set', { main: 'OFF' } ) },
                                    { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/BR/LIGHT/LB/state', 'A/4/BR/LIGHT/LB/set', { main: 'OFF' } ) },
                                    { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT1', protocol: 'mqtt', device: new Light1( 'A/4/BR/LIGHT/LS/state', 'A/4/BR/LIGHT/LS/set', { main: 'OFF' } ) },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http', device: new IPCamera( 'http://192.168.1.79/webcam' ) },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', device: new TemperatureHumidity( 'A/4/BR/TH', { temperature: 22, humidity: 11 } ) }
                                ]
                            }, 
                            { 
                                name: "Γραφείο",
                                items: [
                                    { name: 'Παράθυρο', domain: 'DOOR', type: 'WINDOW2R', protocol: 'mqtt', device: new Window2R( 'A/4/O/WINDOW/W', { left: 'CLOSED', right: 'CLOSED', recline: 'OPEN' } ) },
                                    { name: 'Φως', domain: 'LIGHT', type: 'LIGHT2', protocol: 'mqtt', device: new Light2( 'A/4/O/LIGHT/L/state', 'A/4/O/LIGHT/L/set', { left: 'OFF', right: 'OFF' } ) },
                                    { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http', device: new IPCamera( 'http://192.168.1.79/webcam' ) },
                                    { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', device: new TemperatureHumidity( 'A/4/BR/TH', { temperature: 23, humidity: 10 } ) }
                                ]
                            } 
                        ] 
                    } 
                ],
                items: [ { name: 'Συναγερμός', domain: 'ALARM', type: 'ALARM', protocol: 'mqtt', device: new Alarm( 'A///ALARM/A/status', 'A///ALARM/A/set', { main: 'ACTIVATED', countdown: 13 } ) } ]
            },
            // { 
            //     name: 'Διαμέρισμα Ειρήνης', 
            //     floors: [ 
            //         { 
            //             name: '3ος', 
            //             rooms: [ 
            //                 { 
            //                     name: "Χωλ",
            //                     items: [
            //                         { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
            //                         { name: 'Εξωτερικό φως εισόδου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 22, humidity: 11 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Σαλόνι",
            //                     items: [
            //                         { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } },
            //                         { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 23, humidity: 10 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Τραπεζαρία",
            //                     items: [
            //                         { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'OPEN' } },
            //                         { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Ρολό παραθύρου', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Πολυέλεος 1/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Πολυέλεος 2/2', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 24, humidity: 11 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Καθιστικό",
            //                     items: [
            //                         { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'OPEN', recline: 'CLOSED' } },
            //                         { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 20, humidity: 10 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Κουζίνα",
            //                     items: [
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 28, humidity: 23 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Μπάνιο",
            //                     items: [
            //                         { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'OPEN', recline: 'CLOSED' } },
            //                         { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 20, humidity: 17 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Κρεββατοκάμαρα",
            //                     items: [
            //                         { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'CLOSED', recline: 'CLOSED' } },
            //                         { name: 'Σίτα παραθύρου', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 24, humidity: 11 } }
            //                     ]
            //                 } 
            //             ] 
            //         } 
            //     ],
            //     items: [ { name: 'Συναγερμός', domain: 'ALARM', type: 'ALARM', protocol: 'mqtt' } ] 
            // },
            // { name: 'Εξοχικό Αλυκή', floors: [ 
            //     { name: 'Ισόγειο', rooms: [ { name: 'Κουζίνα', items: [] }, { name: 'Σαλόνι', items: [] }, { name: 'Μπάνιο', items: [] } ] }, 
            //     { name: '1ος', rooms: [ { name: 'Σαλόνι', items: [] }, { name: 'Μπάνιο', items: [] }, { name: 'WC', items: [] }, { name: 'Κρεββατοκάμαρα', items: [] }, { name: 'Κρεββατοκάμαρα παιδιών', items: [] }, { name: 'Κρεββατοκάμαρα Αθηνάς', items: [] }, { name: 'Κρεββατοκάμαρα δυτική', items: [] } ] } 
            //     ] 
            // },
            // { 
            //     name: 'Εταιρία', 
            //     floors: [ 
            //         { 
            //             name: '1ος', 
            //             rooms: [ 
            //                 { 
            //                     name: "Χωλ",
            //                     items: [
            //                         { name: 'Πόρτα εισόδου', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Εξωτερικό φως εισόδου', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
            //                         { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http' },
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Σαλόνι",
            //                     items: [
            //                         { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'CLOSED' } },
            //                         { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1_AUTO', protocol: 'mqtt', state: { main: 'OPEN', percent: 10 } },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 27, humidity: 9 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Κουζίνα",
            //                     items: [
            //                         { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Παράθυρο διπλό', domain: 'WINDOW', type: 'WINDOW2R', protocol: 'mqtt', state: { left: 'CLOSED', right: 'CLOSED', recline: 'CLOSED' } },
            //                         { name: 'Παράθυρο μονό', domain: 'WINDOW', type: 'WINDOW1R', protocol: 'mqtt', state: { main: 'CLOSED', recline: 'OPEN' } },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'ON' },
            //                         { name: 'Σποτ', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 29, humidity: 36 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Μπάνιο",
            //                     items: [
            //                         { name: 'Παράθυρο', domain: 'WINDOW', type: 'WINDOW1', protocol: 'mqtt', state: 'OPEN' },
            //                         { name: 'Φως', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 28, humidity: 35 } }
            //                     ]
            //                 }, 
            //                 { 
            //                     name: "Γραφείο",
            //                     items: [
            //                         { name: 'Μπαλκονόπορτα', domain: 'DOOR', type: 'DOOR1', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Σίτα μπαλκονόπορτας', domain: 'COVER', type: 'NET', protocol: 'mqtt', state: 'CLOSED' },
            //                         { name: 'Ρολό μπαλκονόπορτας', domain: 'COVER', type: 'ROLLER1_AUTO', protocol: 'mqtt', state: { main: 'CLOSED', percent: 100 } },
            //                         { name: 'Φως ταβάνι', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Φως μπαλκονιού', domain: 'LIGHT', type: 'LIGHT', protocol: 'mqtt', state: 'OFF' },
            //                         { name: 'Κάμερα', domain: 'CAMERA', type: 'IPCAMERA', protocol: 'http' },
            //                         { name: 'Θερμοκρασία', domain: 'CLIMATE', type: 'TEMPERATURE_HUMIDITY', protocol: 'mqtt', state: { temperature: 26, humidity: 27 } }
            //                     ]
            //                 } 
            //             ] 
            //         } 
            //     ],
            //     items: [ { name: 'Συναγερμός', domain: 'ALARM', type: 'ALARM', protocol: 'mqtt' } ]
            // }
        ];
*/
        // console.log( vm.houses );
        vm.isCollapsed = [];        
        for( var i = 0 ; i < vm.houses.length ; i++ )
        {            
            vm.isCollapsed[i] = { 
                house: true,
                filter: { DOOR: true, WINDOW: true, LIGHT: true, CLIMATE: true, COVER: true, ALARM: true, CAMERA: true, MOTION: true },
                allChildrenExpanded: false,
                showMqttTopics: false,
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

        //MQTT
        var mqtt_broker_ip = '192.168.1.79';
        var mqtt_broker_port = '1884';
        var mqtt_client_id = 'eHomeWebGUI'
        var client = MqttClient;
        client.observerDevices = [];
        client.init( mqtt_broker_ip, mqtt_broker_port, mqtt_client_id );
        client.connect({
            onSuccess: successCallback,
            onFailure: function() { alert( 'Failed to connect to mqtt broker ', mqtt_broker_ip, mqtt_broker_port ); }
        });        

        client._client.onMessageArrived = function( message )
        {
            console.log( 'Received [topic] "message": [', message.destinationName.trim(), '] "', message.payloadString, '"' );
            for( var i = 0 ; i < client.observerDevices.length ; i++ )
            {
                console.log( client.observerDevices[i] );
                $scope.$apply( function() { client.observerDevices[i].update( message.destinationName, message.payloadString ); } );
            }
        }

        client._client.onConnectionLost = function( error ) { 
            console.log( 'Connection lost with error: ', error, ' attempting to reconnect.' );
            client.connect( {
                onSuccess: successCallback,
                onFailure: function() { alert( 'Failed to connect to mqtt broker ', mqtt_broker_ip, mqtt_broker_port ); }
            } );
        }

        function successCallback()
        {
            console.log( 'Successfully connected to mqtt broker ', mqtt_broker_ip, mqtt_broker_port, ' subscribing to item topics...');
            // subscribe to all topics
            for( var h = 0 ; h < vm.houses.length ; h++ )
            {
                // console.log( 'Doing house "', vm.houses[h].name, '":' )
                for( var f = 0 ; f < vm.houses[h].floors.length ; f++ )
                {
                    // console.log( '\tfloor "', vm.houses[h].floors[f].name, '":' )
                    for( var r = 0 ; r < vm.houses[h].floors[f].rooms.length ; r++ )
                    {
                        // console.log( '\t\troom "', vm.houses[h].floors[f].rooms[r].name, '":' )
                        for( var i = 0 ; i < vm.houses[h].floors[f].rooms[r].items.length ; i++ )
                        {
                            if( vm.houses[h].floors[f].rooms[r].items[i].protocol = 'mqtt' )
                            {
                                subscribe( vm.houses[h].floors[f].rooms[r].items[i] );
                            }
                        }
                    }
                }
                if( vm.houses[h].items )
                {
                    for( var i = 0 ; i < vm.houses[h].items.length ; i++ )
                    {
                        if( vm.houses[h].items[i].protocol = 'mqtt' )
                        {
                            subscribe( vm.houses[h].items[i] );
                        }
                    }
                }
            }
        }

        function subscribe( item )
        {
            // console.log( '\t\titem:', item );
            switch( item.type )
            {
                case 'ALARM':
                case 'NET':
                case 'DOOR1':
                case 'DOOR2R':
                case 'LIGHT1':
                case 'LIGHT2':
                case 'MOTIONCAMERA':
                case 'MOTIONCAMERAPANTILT':
                case 'ROLLER1':
                case 'ROLLER1_AUTO':
                case 'TEMPERATURE_HUMIDITY':
                case 'WINDOW1':
                case 'WINDOW1R':
                case 'WINDOW2R':
                    if( !item.device )
                    {
                        // console.log( 'No device property found!' );
                    }
                    else
                    {
                        console.log( 'Subscribing ', item.device );
                        client.observerDevices.push( item.device );
                        client.subscribe( item.device.mqtt_subscribe_topic );
                    }
                    break;
                default: 
                    // console.log( 'Unknown item type [', item.type, ']' );
                    break;
            }
            switch( item.type )
            {
                case 'ALARM':
                case 'LIGHT1':
                case 'LIGHT2':
                case 'MOTIONCAMERA':
                case 'MOTIONCAMERAPANTILT':
                case 'ROLLER1_AUTO':
                    if( item.device )
                    {
                        item.device.setPublisher( client );
                    }
                    break;
                default:
                    break;
            }
        }
    }
})();
