mainModule.controller('AddingNewCompanyModalController', ['$scope', '$uibModalInstance', 'companyData', 'companyService',
    function ($scope, $uibModalInstance, companyData, companyService) {

        $scope.formData = {};

        $scope.formData.parent = {};

        function checkParent() {
            if (companyData != null) {
                companyService.getCompaniesWithParent(companyData.id).then(function (data) {
                    if (data != "") {
                        $scope.formData.parent = companyData;
                        $scope.formData.parent.parent = data[0];
                    }
                    else {
                        $scope.formData.parent = companyData;
                    }
                })
            }
            else {
                $scope.formData.parent = null;
            }
        }

        checkParent();

        function isInt(value) {
            return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
        }

        $scope.add = function () {
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
