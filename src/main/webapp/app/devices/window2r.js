(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Window2R', Window2R);

    Window2R.$inject = [];

    function Window2R() {
        //Constructor
        function Window2R( mqtt_subscribe_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        Window2R.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        return Window2R;
    }
})();
