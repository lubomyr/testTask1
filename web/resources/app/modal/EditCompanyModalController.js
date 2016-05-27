mainModule.controller('EditCompanyModalController', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {

        $scope.formData = {};

        $scope.show = function () {
            $scope.formData.name = company.name;
            $scope.formData.estimateEarnings = company.estimateEarnings;
            $scope.formData.children = company.children;
        };

        $scope.show();

        $scope.edit = function () {
            $uibModalInstance.close($scope.formData);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
}]);
