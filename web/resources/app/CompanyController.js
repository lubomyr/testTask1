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

        $scope.getRootCompanies = function () {
            companyService.getRootCompanies().then(function (data) {
                $scope.rootCompanies = data;
            });
        };

        $scope.getRootCompanies();

        $scope.addNewCompany = function (company) {
            console.log("add new Company :" + company);
            companyService.addNewCompany(company)
                .then(function (response) {
                    if (response.status == 200) {
                        $scope.getRootCompanies();
                    }
                });
        };

        $scope.updateCompany = function (company) {
            console.log("update Company :" + company);
            companyService.updateCompany(company)
                .then(function (response) {
                    if (response.status == 200) {
                        $scope.getRootCompanies();
                    }
                });
        };

        $scope.deleteCompany = function (company) {
            console.log("delete Company :" + company);
            companyService.deleteCompany(company)
                .then(function (response) {
                    if (response.status == 200) {
                        $scope.getRootCompanies();
                    }
                });
        };

        $scope.animationsEnabled = true;

        $scope.addCompanyModal = function (company) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/new-company.html',
                controller: 'AddingNewCompanyModalController',
                size: 'lg',
                resolve: {
                    companyData: company,
                    companyService: companyService
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result);
                $scope.addNewCompany(result);
            });

        };

        $scope.editCompanyModal = function (company) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/edit-company.html',
                controller: 'EditCompanyModalController',
                size: 'lg',
                resolve: {
                    companyData: company,
                    parentData: companyService.getCompaniesWithParent(company.id).then(function (data) {
                        return data;
                    })
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result);
                $scope.updateCompany(result);
            });

        };

        $scope.viewCompanyModal = function (company) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/view-company.html',
                controller: 'ViewCompanyModalController',
                size: 'lg',
                resolve: {
                    companyData: company,
                    parentData: companyService.getCompaniesWithParent(company.id).then(function (data) {
                        return data;
                    })
                }
            });
        };

        $scope.deleteCompanyModal = function (company) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'resources/app/modal/delete-alert.html',
                controller: 'DeleteCompanyModalController',
                size: 'lg',
                resolve: {
                    companyData: company
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result);
                $scope.deleteCompany(result);
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    }
]);