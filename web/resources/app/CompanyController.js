mainModule.controller('CompanyController', ['$scope', '$uibModal', 'CompanyService',
    function ($scope, $uibModal, companyService) {

        $scope.companies = [];
        $scope.rootCompanies = [];
        $scope.companiesWithChildren = [];
        $scope.companiesWithParent = [];
        $scope.company = {};

        $scope.reload = function () {
            location.reload();
        };

        $scope.getAllCompanies = function () {
            companyService.getAllCompanies().then(function (data) {
                $scope.companies = data;
            });
        };

        $scope.getAllCompanies();

        $scope.getCompanyById = function (companyId) {
            companyService.getListAllChannelsById(companyId).then(function (data) {
                $scope.company = data;
            });
        };

        $scope.getRootCompanies = function () {
            companyService.getRootCompanies().then(function (data) {
                $scope.rootCompanies = data;
            });
        };

        $scope.getRootCompanies();

        $scope.getCompaniesWithChildren = function (companyId) {
            companyService.getCompaniesWithChildren(companyId).then(function (data) {
                $scope.companiesWithChildren = data;
            });
        };

        $scope.getCompaniesWithParent = function (companyId) {
            companyService.getCompaniesWithParent(companyId).then(function (data) {
                $scope.companiesWithParent = data;
            });
        };

        $scope.addNewCompany = function (company) {
            console.log("add new Company :" + company);
            companyService.addNewCompany(company)
                .then(function (response) {
                    if (response.status == 200) {

                    } else {

                    }
                });
        };

        $scope.updateCompany = function (company) {
            console.log("update Company :" + company);
            companyService.updateCompany(company)
                .then(function (response) {
                    if (response.status == 200) {

                    } else {

                    }
                });
        };

        $scope.deleteCompany = function (company) {
            console.log("delete Company :" + company);
            companyService.deleteCompany(company)
                .then(function (response) {
                    if (response.status == 200) {

                    } else {

                    }
                });
        };

        $scope.animationsEnabled = true;

        $scope.addCompanyModal = function (company) {
            console.log("add Company :" + company);
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/new-company.html',
                controller: function ($uibModalInstance, $scope) {
                    $scope.formData = {};

                    $scope.formData.parent = company;

                    $scope.add = function () {
                        $uibModalInstance.close($scope.formData);
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                size: 'lg'
            });

            modalInstance.result.then(function (result) {
                console.log(result);
                $scope.addNewCompany(result)
            });

        };

        $scope.editCompanyModal = function (company) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/edit-company.html',
                controller: function ($uibModalInstance, $scope) {
                    $scope.formData = {};

                    $scope.show = function () {
                        console.log(company);
                        $scope.formData.companyName = company.name;
                        $scope.formData.estimateEarnings = company.estimateEarnings;
                    };

                    $scope.show();

                    $scope.edit = function () {
                        $uibModalInstance.close($scope.formData);
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                size: 'lg'
            });

            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
            });

        };

        $scope.viewCompanyModal = function (company) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/view-company.html',
                controller: function ($uibModalInstance, $scope) {

                    $scope.info = company;
                    $scope.childCompanies = company.children;

                    $scope.close = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                size: 'lg'
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    }
]);