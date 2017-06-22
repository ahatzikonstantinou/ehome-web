(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Alarm', Alarm);

    Alarm.$inject = [];

    function Alarm() {
        //Constructor
        function Alarm( mqtt_subscribe_topic, mqtt_publish_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.mqtt_publish_topic = mqtt_publish_topic;
            this.state = state;
            this.publisher = null;
        }

        Alarm.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        Alarm.prototype.setPublisher = function( publisher )
        {
            this.publisher = publisher;
        }

        Alarm.prototype.set = function( value )
        {
            console.log( 'Alarm will send value ', value, ' to topic ', this.mqtt_publish_topic );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( value );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Alarm sending message: ', message );
                this.publisher.send( message );
            }
        }

        return Alarm;
    }
})();
