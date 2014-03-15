(function(){'use strict';

angular
.module("smartAdmin.initialization", [])
.run(function(){

    angular.element(document).on("ready", function() {
        (function(){
        })();
    });
});


angular
.module("smartAdmin.pageSetup", [])
.run(function(){

    angular.element(document).on("ready", function() {
        (function(){
        })();
    });
});

angular
.module("smartAdmin", [/*"smartAdmin.initialization", "smartAdmin.pageSetup"*/])

})();
