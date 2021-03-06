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
            MqttDevice.call( this, mqtt_subscribe_topic, state, mqtt_publish_topic );
        }
        Alarm.prototype = Object.create( MqttDevice.prototype );
        Alarm.prototype.constructor = Alarm;

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

        Alarm.prototype._deactivateRequest = function()
        {
            console.log( 'alarm will send a deactivate request command' );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( 'DEACTIVATE_REQUEST' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Alarm sending message: ', message );
                this.publisher.send( message );
            }            
        }

        Alarm.prototype.deactivate = function( pin )
        {
            console.log( 'alarm will send a deactivate command with pin: ', pin );
            if( ( 'TRIGGERED' == this.state.main || 'ACTIVATED' == this.state.main ) && this.publisher )
            {
                var message = new Paho.MQTT.Message( '{"cmd":"DEACTIVATE", "pin":"' + pin + '"}' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Alarm sending message: ', message );
                this.publisher.send( message );
            }
        }

        Alarm.prototype.armHome = function()
        {
            console.log( 'alarm will send a arm_home command' );
            if( 'UNARMED' == this.state.main && this.publisher )
            {
                var message = new Paho.MQTT.Message( 'ARM_HOME' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Alarm sending message: ', message );
                this.publisher.send( message );
            }
        }

        Alarm.prototype.armAway = function()
        {
            console.log( 'alarm will send a arm_away command' );
            if( 'UNARMED' == this.state.main && this.publisher )
            {
                var message = new Paho.MQTT.Message( 'ARM_AWAY' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Alarm sending message: ', message );
                this.publisher.send( message );
            }
        }

        Alarm.prototype._disarm = function()
        {
            console.log( 'alarm will send a DISARM command' );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( 'DISARM' );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Alarm sending message: ', message );
                this.publisher.send( message );
            }
        }        

        Alarm.prototype.disarm = function()
        {
            if( 'TRIGGERED' == this.state.main || 'ACTIVATED' == this.state.main )
            {
                this._deactivateRequest();
            }
            else if( 'ARMED_HOME' == this.state.main || 'ARMED_AWAY' == this.state.main || 'ARMING' == this.state.main )
            {
                this._disarm();
            }
        }
        
        return Alarm;
    }
})();
