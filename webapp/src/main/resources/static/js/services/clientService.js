ngServices.factory('clientService', [
    '$resource', '$http', '$window', '$injector',
    function ($resource, $http, $window, $injector) {
        var result = {
            now: new Date(),
        }
        result.convertToDateNumber = function (data, arrayProper) {
            var tempData = angular.extend({}, data);
            angular.forEach(tempData, function (value, key) {
                if (arrayProper.indexOf(key) != -1) {

                    var d = new Date(tempData[key]);
                    var dateNumber = d.getTime();
                    var timeZone = d.getTimezoneOffset();

                    var finalDate = '/Date(' + dateNumber + timeZone + ')/';
                    tempData[key] = finalDate;
                }

            })
            return tempData;
        }
        result.convertFromDateNumber = function (data, arrayProper) {
            var tempData = angular.extend({}, data);
            angular.forEach(tempData, function (value, key) {
                if (arrayProper.indexOf(key) != -1) {
                    if (tempData[key]) {
                        tempData[key] = new Date(parseInt(tempData[key].replace('/Date(', '')));
                    }

                }

            })
            return tempData;
        }

        result.convertNumberToString = function (data, arrayProper) {
            var tempData = angular.extend({}, data);
            angular.forEach(tempData, function (value, key) {

            })
        }

        result.saveExcel = function (data, fileName) {
            var fileName = fileName + ".xls" 
            var filetype = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8";
            var ieEDGE = navigator.userAgent.match(/Edge/g);
            var ie = navigator.userAgent.match(/.NET/g); // IE 11+
            var oldIE = navigator.userAgent.match(/MSIE/g);
            if (ie || oldIE || ieEDGE) {
                var blob = new window.Blob(data, { type: filetype });
                window.navigator.msSaveBlob(blob, fileName);
            }
            else {
                var a = $("<a style='display: none;'/>");
                var url = window.URL.createObjectURL(new Blob(data, { type: filetype }));
                a.attr("href", url);
                a.attr("download", fileName);
                $("body").append(a);
                a[0].click();
                window.URL.revokeObjectURL(url);
                a.remove();
            }
        }
        return result;
    }
]);
