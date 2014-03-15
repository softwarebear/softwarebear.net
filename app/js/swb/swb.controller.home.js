(function(){'use strict';

angular
.module('swb.controller.home', ['swb.constants'])
.controller('swb.controller.home', ['$scope', 'AUTHOR',
    function($scope, AUTHOR){
        $scope.author = AUTHOR;
}]);

})();