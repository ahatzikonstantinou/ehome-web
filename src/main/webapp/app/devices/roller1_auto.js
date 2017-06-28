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
            MqttDevice.call( this, mqtt_subscribe_topic, state, mqtt_publish_topic );
            this.tempPercent = state.percent;
        }

        Roller1_Auto.prototype = Object.create( MqttDevice.prototype );
        Roller1_Auto.prototype.constructor = Roller1_Auto;

        Roller1_Auto.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
                if( this.state.percent != this.tempPercent )
                {
                    this.tempPercent = this.state.percent;
                }
            }
        }       

        Roller1_Auto.prototype.setPercent = function()
        {
            // the rzSlider control will call Roller1_Auto.prototype.setPercent (its own onEnd handler) even when first rendering the control.
            // tempPercent is used to avoid having the rzSlider cause unnecessary publications for every rendering
            // console.log( this );
            // console.log( 'Roller1_Auto this.state.percent: ', this.state.percent, ' this.tempPercent: ', this.tempPercent );
            if( this.tempPercent == this.state.percent )
            {
                // console.log( 'Percent is still ', this.state.percent, ' will not publish change.' );                
                return;
            }
            this.state.percent = this.tempPercent;
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( this.state.percent + '' );
                message.destinationName = this.mqtt_publish_topic ;
                // console.log( 'Roller1_Auto sending message: ', message );
                this.publisher.send( message );
            }
        }

        return Roller1_Auto;
    }
})();
