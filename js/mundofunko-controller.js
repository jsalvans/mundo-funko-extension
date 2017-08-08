mfApp.controller('MundoFunkoBrowserExtController', function ($scope, $http, $location, $timeout, $localStorage, $sessionStorage) {

	if (!$localStorage.hasOwnProperty('numNovedades')) {
		$localStorage.numNovedades = 10;
	}

	$scope.init = function() {
		$localStorage.newCounter = 0;
		chrome.browserAction.setBadgeText({text: ''});

		$('.ofertas .loader').show();	$('.novedades .loader').show();
		$('.ofertas .funko').hide();	$('.novedades .funko').hide();
		$('.ofertas .error').hide();	$('.novedades .error').hide();
		if($localStorage.hasOwnProperty('ofertas')) {
			$('.ofertas .loader').hide();
			if($localStorage.ofertas.length == 0) {
				$('.ofertas .error').show();
			} else {
				$scope.ofertas = $localStorage.ofertas;
				$('.ofertas .loader').hide();
				$('.ofertas .funko').show();
			}
		}
		if($localStorage.hasOwnProperty('novedades')) {
			$('.novedades .loader').hide();
			if($localStorage.novedades.length == 0) {
				$('.novedades .error').show();
			} else {
				$scope.novedades = $localStorage.novedades;
				$('.novedades .loader').hide();
				$('.novedades .funko').show();
			}
		}
	};

	setInterval(function() {$scope.init();}, scheludeTime);
	$scope.init();

});