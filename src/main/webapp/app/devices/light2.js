(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Light2', Light2);

    Light2.$inject = [];

    function Light2() {
        //Constructor
        function Light2( mqtt_subscribe_topic, mqtt_publish_topic, state )
        {
            //public properties
            MqttDevice.call( this, mqtt_subscribe_topic, state, mqtt_publish_topic );
        }
        
        Light2.prototype = Object.create( MqttDevice.prototype );
        Light2.prototype.constructor = Light2;

        Light2.prototype.switchLeft = function( value )
        {
            console.log( 'Light2 will send value ', value, ' to topic ', this.mqtt_publish_topic );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( '{"left": "' + value + '"}' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Light2 sending message: ', message );
                this.publisher.send( message );

                // this.state.left = value;//debugging
            }
        }

        Light2.prototype.switchRight = function( value )
        {
            console.log( 'Light2 will send value ', value, ' to topic ', this.mqtt_publish_topic );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( '{"right": "' + value + '"}' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Light2 sending message: ', message );
                this.publisher.send( message );

                // this.state.right = value;//debugging
            }
        }

        return Light2;
    }
})();
