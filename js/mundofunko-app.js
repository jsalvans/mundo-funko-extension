var mfApp = angular.module('MundoFunkoBrowserExtApp', ['ngStorage', 'ngScrollbars']).config(function () { });

mfApp.service('buscarFunko', ['$http', function ($http) {
	return {
		cercar: (function (url, canceler) {
			return $http({
				url: url,
				timeout: canceler.promise,
				method: 'GET'
			}).then(function successCallback(response) {
				return response.data;
			},function(resp){
				return resp.xhrStatus;
			});
		})
	};
}]);

var scheludeTime = 30000;