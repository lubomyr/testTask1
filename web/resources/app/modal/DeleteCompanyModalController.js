mainModule.controller('DeleteCompanyModalController', ['$scope', '$uibModalInstance', 'companyData',
    function ($scope, $uibModalInstance, companyData) {

        $scope.delData = companyData;

        $scope.delete = function () {
            $uibModalInstance.close($scope.delData);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }]);