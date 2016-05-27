mainModule.controller('EditCompanyModalController', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {
        $scope.formData = {};

        $scope.show = function () {
            console.log(company);
            $scope.formData.companyName = company.name;
            $scope.formData.estimateEarnings = company.estimateEarnings;
        };

        $scope.show();

        $scope.edit = function() {
            $uibModalInstance.close($scope.formData);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
