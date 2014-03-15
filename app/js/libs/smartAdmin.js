(function(){'use strict';


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
