mainModule.controller('AddingNewCompanyModalController', ['$scope', '$uibModalInstance', 'companyData',
    function ($scope, $uibModalInstance, companyData) {

        $scope.formData = {};

        $scope.formData.parent = companyData;

        $scope.add = function () {
            $uibModalInstance.close($scope.formData);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
}]);
