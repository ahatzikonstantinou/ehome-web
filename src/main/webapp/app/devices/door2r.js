(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Door2R', Door2R);

    Door2R.$inject = [];

    function Door2R() {
        //Constructor
        function Door2R( mqtt_subscribe_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        Door2R.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        return Door2R;
    }
})();
