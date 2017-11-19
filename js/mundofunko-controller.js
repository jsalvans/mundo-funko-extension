mfApp.controller('MundoFunkoBrowserExtController', function ($scope, $http, $location, $timeout, $localStorage, $sessionStorage, $q, AppSettings, buscarFunko) {

	$scope.buscar = false;
	$scope.query = "";
	$scope.resultats = [];

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

	$scope.toogleCerca = function() {
		$scope.buscar = !$scope.buscar;
		$scope.query = "";
		$scope.resultats = [];
		if($scope.buscar == true) {
			setTimeout(function () {$('.queryText').focus();}, 300);
			$('.resultats .funko').hide();
		}
	};

	$scope.canceler = undefined;
	$scope.buscarApi = function(textCerca) {
		if($scope.canceler != undefined) {
			$scope.canceler.resolve();
			$scope.canceler = undefined;
		}
		$scope.canceler = $q.defer();
		
		$('.resultats .funko').hide();
		$('.resultats .noResults').hide();
		$('.resultats .noText').hide();
		$('.resultats .loader').hide();
		
		if(textCerca == '')
			$('.resultats .noText').show();
		else {
			$('.resultats .loader').show();

			var query = encodeURI(textCerca.replace(" ", "-"));
			var url = AppSettings.api.url + 'product/search/' + AppSettings.api.user + '/' + AppSettings.api.pass + '/' + query + '/es';
			buscarFunko.cercar(url, $scope.canceler).then(
				function(response){
					if(response != 'abort') {
						$scope.resultats = response;
						$('.resultats .loader').hide();
						if($scope.resultats.length == 0) {
							$('.resultats .noResults').show();
						} else {
							$('.resultats .funko').show();
						}
						$scope.canceler = undefined;
					}
				}
			);
		}
	};
	
	$scope.config = {
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
					if ($(".mCSB_container") != undefined) {
						if ($(".mCSB_container").position().top <= -280) {
							$("#titulo-fix").html("Novedades");
						} else {
							$("#titulo-fix").html("Ofertas");
						}
					}
				}
			}
		};
			
	$scope.configSidebar = {
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
					if ($(".mCSB_container") != undefined) {
						if ($(".mCSB_container").position().top <= -280) {
							$("#titulo-fix").html("Novedades");
						} else {
							$("#titulo-fix").html("Ofertas");
						}
					}
				}
			}
		};

	setInterval(function() {$scope.init();}, scheludeTime);
	$scope.init();

});