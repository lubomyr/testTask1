mainModule.service('CompanyService', ['$http', '$log', function ($http, $log) {
        return {
            getAllCompanies: function () {
                return $http.get("/getAllCompanies")
                    .then(function(response) {
                        return response.data;
                    });
            },

            getCompanyById: function (companyId) {
                return $http.get('/getCompanyById/' + companyId)
                    .then(function(response) {
                        return response.data;
                    });
            },

            getRootCompanies: function () {
                return $http.get('/getRootCompanies')
                    .then(function(response) {
                        return response.data;
                    });
            },

            getCompaniesWithChildren: function (companyId) {
                return $http.get('/getCompaniesWithChildren/' + companyId)
                    .then(function(response) {
                        return response.data;
                    });
            },

            getCompaniesWithParent: function (companyId) {
                return $http.get('/getCompaniesWithParent/' + companyId)
                    .then(function(response) {
                        return response.data;
                    });
            },

            addNewCompany: function(company) {
                return $http.post('/addNewCompany',company)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            },

            updateCompany: function(company) {
                return $http.get('/updateCompany/' + company)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            },

            deleteCompany: function(company) {
                return $http.get('/deleteCompany/' + company)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }

        }
    }]);
