(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Window1R', Window1R);

    Window1R.$inject = [];

    function Window1R() {
        //Constructor
        function Window1R( mqtt_subscribe_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        Window1R.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        return Window1R;
    }
})();
