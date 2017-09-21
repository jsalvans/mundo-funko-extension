var mfApp = angular.module('MundoFunkoBrowserExtApp', ['ngStorage', 'ngScrollbars']).config(function () { });

mfApp.config(function (ScrollBarsProvider) {
	ScrollBarsProvider.defaults = {
		scrollButtons: {
			scrollAmount: 'auto',
			enable: false
		},
		scrollInertia: 400,
		axis: 'y',
		theme: 'minimal-dark',
		autoHideScrollbar: true,
		callbacks: {
			whileScrolling: function () {
				if ($("#mCSB_1_container") != undefined) {
					if ($("#mCSB_1_container").position().top <= -280) {
						$("#titulo-fix").html("Novedades");
					} else {
						$("#titulo-fix").html("Ofertas");
					}
				}
			}
		}
	};
});

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