mainModule.controller('DeleteCompanyModalController', ['$scope', '$uibModalInstance',
    function ($scope, $uibModalInstance) {

        $scope.delData = company;


        $scope.delete = function () {
            $uibModalInstance.close($scope.delData);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }]);