(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .controller('AlarmPanelController', AlarmPanelController);

    AlarmPanelController.$inject = ['$scope', '$state', 'MqttClient', 'Door1', 'Window1R', 'Light1', 'TemperatureHumidity', 'Door2R', 'Net', 'Roller1_Auto', 'Window2R', 'Roller1', 'Light2', 'Alarm', 'IPCamera', 'IPCameraPanTilt', 'Houses', 'topic' ];

    function AlarmPanelController($scope, $state, MqttClient, Door1, Window1R, Light1, TemperatureHumidity, Door2R, Net, Roller1_Auto, Window2R, Roller1, Light2, Alarm, IPCamera, IPCameraPanTilt, Houses, topic ) {
        var vm = this;

        vm.topic = topic;
        vm.subscribe = topic + 'status';
        vm.publish = topic + 'set';
        vm.alarm = new Alarm( vm.subscribe, vm.publish, { main: 'UNKNOWN', countdown: -1 } )

        console.log( 'topic: ', topic);

        //MQTT
        var mqtt_broker_ip = '192.168.1.79';
        var mqtt_broker_port = '1884';
        var mqtt_client_id = 'eHomeWebGUI'
        var client = MqttClient;
        client.init( mqtt_broker_ip, mqtt_broker_port, mqtt_client_id );
        client.connect({
            onSuccess: successCallback,
            onFailure: function() { alert( 'Failed to connect to mqtt broker ', mqtt_broker_ip, mqtt_broker_port ); }
        });   

        function successCallback()
        {
            console.log( 'subscribe: ', vm.subscribe );
            client.subscribe( vm.alarm.mqtt_subscribe_topic );
        }

        client._client.onMessageArrived = function( message )
        {
            console.log( 'Received [topic] "message": [', message.destinationName.trim(), '] "', message.payloadString, '"' );
        }
    }
})();
