sysModule.factory('loginService', ['$resource', '$http', '$window', '$q', 'configService',
    function ($resource, $http, $window, $q, configService) {
        var url = configService.urlApiService;
        var urlService = url + '/api/Areas/login';
        var sum = function (input, array) {
            var total = 0;
            angular.forEach(array, function (value, index) {
                total += value[input];
                return total;
            });
        };

        var result = {
            calculator: sum,
            allData: function (data, successCallback) {
                $http.post(urlService + '/PagingRecord').then(successCallback);
            },
            postData: function (data, successCallback) {
                $http.post(urlService + '/Post', data).then(successCallback);
            },
            update: function (params, successCallback) {
                $http.put(urlService + '/Put/' + params.id, params).then(successCallback);
            },
            deleteItem: function (id, successCallback) {
                $http.delete(urlService + '/Delete/' + id).then(successCallback);
            }
        };
        return result;
    }]);

var loginController = sysModule.controller('loginController', ['$scope', '$log', 'loginService', '$uibModal', 'sysSerive', '$http',
    '$window', 'configService',
    function ($scope, $log, loginService, $uibModal, sysSerive, $http, $window, configService) {
        $scope.datatest = "done";
    }]);
