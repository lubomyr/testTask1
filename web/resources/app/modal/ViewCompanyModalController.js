mainModule.controller('ViewCompanyModalController', ['$scope', '$uibModalInstance', 'companyData', 'parentData',
    function ($scope, $uibModalInstance, companyData, parentData) {

        $scope.info = companyData;
        $scope.childCompanies = companyData.children;
        if (parentData == '')
            $scope.info.parent = '';
        else
            $scope.info.parent = parentData[0];

        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };

}]);