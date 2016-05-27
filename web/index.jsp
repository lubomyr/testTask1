<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org"
      id="mainModule">
<head>
    <title>Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <style>
        .grpbtn {
            width: 200px
        }

        .inline {
            display: inline-block;
        }
    </style>
</head>
<body>

<div class="row" ng-controller="CompanyController" ng-model="company">
    <a type="button" class="btn btn-primary btn-sm grpbtn" ng-click="addCompanyModal(null)">Add new Company</a>
    <table>
        <tr>
            <td>
                <script type="text/ng-template" id="companies_tree.html">
                        {{company.name}}
                        {{company.estimateEarnings}}
                        <div class="inline" ng-show="company.estimateEarnings != company.totalEarnings">
                            {{company.totalEarnings}}
                        </div>
                    </a>
                    <a type="button" class="btn btn-info btn-sm" ng-click="viewCompanyModal(company)">View</a>
                    <a type="button" class="btn btn-success btn-sm" ng-click="editCompanyModal(company)">Edit</a>
                    <a type="button" class="btn btn-primary btn-sm" ng-click="addCompanyModal(company)">Add
                        child</a>
                    <a type="button" class="btn btn-danger btn-sm" ng-click="deleteCompanyModal(company)">Delete</a>
                    <ul>
                        <li ng-repeat="company in company.children" ng-include="'companies_tree.html'"></li>
                    </ul>
                </script>
                <ul>
                    <li ng-repeat="company in rootCompanies" ng-include="'companies_tree.html'"></li>
                </ul>
            </td>
        </tr>
    </table>
</div>

</body>
<script src="resources/assets/bower_components/requirejs/require.js"></script>
<script src="resources/app/runApp.js"></script>
</html>
