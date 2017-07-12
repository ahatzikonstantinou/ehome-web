(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('MotionCamera', MotionCamera);

    MotionCamera.$inject = ['$interval'];

    function MotionCamera( $interval ) {
        //Constructor
        function MotionCamera( mqtt_subscribe_topic, mqtt_publish_topic, cameraId, videostream, state, detection )
        {
            MqttDevice.call( this, mqtt_subscribe_topic, state, mqtt_publish_topic );

            //public properties
            this.cameraId = cameraId
            this.videostream = videostream; 
            this.detection = detection;            
            this.lastDetection = Date.now();
        }

        MotionCamera.prototype = Object.create( MqttDevice.prototype );
        MotionCamera.prototype.constructor = MotionCamera;

        MotionCamera.prototype._cmd = function( value )
        { 
            if( this.publisher )
            { 
                var m = new Paho.MQTT.Message( '{"cmd":"' + value +'", "camera":"' + this.cameraId + '"}' ); 
                m.destinationName = this.mqtt_publish_topic; 
                this.publisher.send( m ); 
            } 
        }

        MotionCamera.prototype.startDetection = function(){ this._cmd( 'startDetection' ); }
        MotionCamera.prototype.pauseDetection = function(){ this._cmd( 'pauseDetection' ); }
        MotionCamera.prototype.getState = function(){ this._cmd( 'getState' ); }

        MotionCamera.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                var data = angular.fromJson( message );
                // console.log( 'motion-data:',  data );
                if( data.camera == this.cameraId )
                {
                    // console.log( 'MotionCamera[' + this.mqtt_subscribe_topic +']: this message is for me.' );
                    if( data.state )
                    {                        
                        this.state = data.state;
                        this.lastUpdate = Date.now();
                    }
                    else if( data.detection )
                    {
                        this.detection = data.detection;
                        this.lastDetection = Date.now();
                    }                    
                }
            }
        }

        return MotionCamera;
    }
})();
