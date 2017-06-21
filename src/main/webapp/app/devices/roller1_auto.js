(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Roller1_Auto', Roller1_Auto);

    Roller1_Auto.$inject = [];

    function Roller1_Auto() {
        //Constructor
        function Roller1_Auto( mqtt_subscribe_topic, mqtt_publish_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.mqtt_publish_topic = mqtt_publish_topic;
            this.state = state;
            this.publisher = null;
        }

        Roller1_Auto.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        Roller1_Auto.prototype.setPublisher = function( publisher )
        {
            this.publisher = publisher;
        }

        Roller1_Auto.prototype.switch = function( value )
        {
            console.log( 'Roller1_Auto will send value ', value, ' to topic ', this.mqtt_publish_topic );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( value );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Roller1_Auto sending message: ', message );
                this.publisher.send( message );
            }
        }

        return Roller1_Auto;
    }
})();
