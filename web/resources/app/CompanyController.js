mainModule.controller('CompanyController', ['$scope', '$modal' ,'CompanyService', function ($scope, $modal, companyService) {
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

    $scope.addNewCompanyModal = function () {
/*        var modalInstance = $modal.open({
            animation: true,
            backdrop: 'static',
            templateUrl: 'resources/app/new-company.html',
            controller: 'AddingNewCompanyModalController',
            size: 'lg'
        });
        modalInstance.result.then(function () {
        });*/
    };

    $scope.viewCompanyModal = function () {

    }


}
])
;