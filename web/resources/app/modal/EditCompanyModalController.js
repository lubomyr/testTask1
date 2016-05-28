mainModule.controller('EditCompanyModalController', ['$scope', '$uibModalInstance', 'companyData', 'parentData',
    function ($scope, $uibModalInstance, companyData, parentData) {

        $scope.formData = {};

        $scope.show = function () {
            $scope.formData = companyData;
        };

        $scope.show();

        if (parentData != '')
            $scope.formData.parent = parentData[0];

        $scope.edit = function () {
            $uibModalInstance.close($scope.formData);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
}]);
