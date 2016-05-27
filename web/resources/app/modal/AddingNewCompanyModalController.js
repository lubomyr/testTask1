mainModule.controller('AddingNewCompanyModalController', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {
        $scope.formData = {};

        $scope.add = function() {
            $uibModalInstance.close($scope.formData);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
