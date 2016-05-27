mainModule.controller('ViewCompanyModalController', ['$scope', '$uibModalInstance',
    function ($scope, $uibModalInstance) {

        $scope.info = company;
        $scope.childCompanies = company.children;

        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };

}]);