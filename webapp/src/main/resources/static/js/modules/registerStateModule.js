var registerStateModule = angular.module("registerStateModule", [])

registerStateModule.provider("$registerStateProvider", function ($stateProvider) {
    var routes = [];
    this.$set = function (stateProvider) {
        var stateProviders = {
            states: stateProvider
        }

        routes.push(stateProviders);
    }

    this.$get = function () {
        return angular.forEach(routes, function (route) {
            angular.forEach(route.states,function(state){
                $stateProvider.state(state.state, {
                    parent: state.parent,
                    moduleName:parent,
                    stateName: child,
                    name:state.pageName,
                    url:state.url,
                    views: state.views,
                    pageInfo: state.pageInfo
                })
            })
        });
    }
})