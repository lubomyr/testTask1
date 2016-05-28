mainModule.controller('EditCompanyModalController', ['$scope', '$uibModalInstance', 'companyData', 'parentData',
    function ($scope, $uibModalInstance, companyData, parentData) {

        $scope.formData = {};

        $scope.show = function () {
            $scope.formData = companyData;
        };

        $scope.show();

        if (parentData != '')
            $scope.formData.parent = parentData[0];

        function isInt(value) {
            return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
        }

        $scope.edit = function () {
            if (($scope.formData.name != null) && ($scope.formData.estimateEarnings != null)
                && isInt($scope.formData.estimateEarnings)) {
                $uibModalInstance.close($scope.formData);
            }
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.checkAll = function (caseForValidation) {
            switch (caseForValidation) {
                case ('estimateEarnings'):
                    var estimateEarnings = $scope.formData.estimateEarnings;
                    if (/^[0-9]{1,20}$/.test(estimateEarnings)) {
                        validator('estimateEarnings', false);
                    } else {
                        validator('estimateEarnings', true);
                    }
                    break;
            }
        };

        function validator(caseForValidation, isValid) {
            switch (caseForValidation) {
                case ('estimateEarnings'):
                    $scope.estimateEarningsValidation = {
                        isValid: isValid,
                        css: isValid ? 'has-error' : 'has-success'
                    };
                    break;
            }
        }
}]);
