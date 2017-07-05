(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('MotionCameraPanTilt', MotionCameraPanTilt);

    MotionCameraPanTilt.$inject = [ '$http' ];

    function MotionCameraPanTilt( $http ) {
        //Constructor
        function MotionCameraPanTilt( mqtt_subscribe_topic, state, videostream, right, left, up, down, stop, startDetection, pauseDetection, detectionStatus )
        {
            MqttDevice.call( this, mqtt_subscribe_topic, state );

            //public properties
            this.videostream = videostream; 
            this.right = right; 
            this.left = left; 
            this.up = up; 
            this.down = down; 
            this.stop = stop;        
            this.startDetection = startDetection;        
            this.pauseDetection = pauseDetection;        
            this.playing = true;
            // There is a strange bug here. Although the http call is executed fine the response is handled as if it where injected in the javascript.
            // So do the checking in the error function
            $http( { method: 'JSONP', url: detectionStatus, transformResponse: function( data ) { return { "data": data }; } } )
            .success( function( response ){ console.log( response );} )
            .error( function( response ){ console.log( response );} );
            // .then( 
            //     function success( response ){ this.playing = ( response.data.indexOf( 'ACTIVE' ) ); }, 
            //     function error( response ){ console.log( response ) ; this.playing = ( response.data.indexOf( 'ACTIVE' ) );  } 
            // );
        }

        MotionCameraPanTilt.prototype = Object.create( MqttDevice.prototype );
        MotionCameraPanTilt.prototype.constructor = MotionCameraPanTilt;

        MotionCameraPanTilt.prototype.play = function( play ){
            if( play )
            {
                var x = $http( { method: 'JSONP', url: this.startDetection } ).then( function success( response ){ this.playing = ( response.data.indexOf( 'resumed' ) > -1 );  }, function error( response ){ console.log( 'Failed to set motion camera play to [', play, ']. Error:', response ) } );
            }
            else
            {
                $http( { method: 'JSONP', url: this.pauseDetection } ).then( function success( response ){ this.playing = ( response.data.indexOf( 'paused' ) > -1 );  }, function error( response ){ console.log( 'Failed to set motion camera play to [', play, ']. Error:', response ) } );
            }
        }


        return MotionCameraPanTilt;
    }
})();

