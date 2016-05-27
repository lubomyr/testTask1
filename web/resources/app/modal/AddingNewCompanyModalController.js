mainModule.controller('AddingNewCompanyModalController', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {

        $scope.formData = {};

        $scope.formData.parent = company;

        $scope.add = function () {
            $uibModalInstance.close($scope.formData);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
}]);
