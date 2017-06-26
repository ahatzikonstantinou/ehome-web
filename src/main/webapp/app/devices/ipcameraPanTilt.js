(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('IPCameraPanTilt', IPCameraPanTilt);

    IPCameraPanTilt.$inject = [];

    function IPCameraPanTilt() {
        //Constructor
        function IPCameraPanTilt( domain, videostream, right, left, up, down, stop )
        {
            //public properties
            this.domain = domain; 
            this.videostream = videostream; 
            this.right = right; 
            this.left = left; 
            this.up = up; 
            this.down = down; 
            this.stop = stop;        
        }

        function videoUrl() { return domain + videostream ; }
        function rightUrl() { return domain + right ; }
        function leftUrl() { return domain + left ; }
        function upUrl() { return domain + up ; }
        function downUrl() { return domain + down ; }
        function stopUrl() { return domain + stop ; }

        return IPCameraPanTilt;
    }
})();
