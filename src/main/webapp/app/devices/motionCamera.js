(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('MotionCamera', MotionCamera);

    MotionCamera.$inject = [];

    function MotionCamera() {
        //Constructor
        function MotionCamera( url, mqtt_subscribe_topic, state )
        {
            MqttDevice.call( this, mqtt_subscribe_topic, state );

            //public properties
            this.url = url;
        }

        MotionCamera.prototype = Object.create( MqttDevice.prototype );
        MotionCamera.prototype.constructor = MotionCamera;

        return MotionCamera;
    }
})();
