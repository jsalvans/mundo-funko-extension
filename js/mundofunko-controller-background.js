mfApp.controller('MundoFunkoBrowserExtControllerBackground', function ($scope, $http, $location, $timeout, $localStorage, $sessionStorage, AppSettings) {

	if (!$localStorage.hasOwnProperty('numNovedades')) {
		$localStorage.numNovedades = 10;
	}
	if (!$localStorage.hasOwnProperty('timeRefresh')) {
		$localStorage.timeRefresh = 0.5;
	}

	$scope.comprovar = function() {
		if (!$localStorage.hasOwnProperty('newCounter')) {
			$localStorage.newCounter = 0;
		}

		$http.get(AppSettings.api.url + 'last_products_sale/' + AppSettings.api.user + '/' + AppSettings.api.pass + '/' + AppSettings.api.token + '/3/es')
			.then(function successCallback(response) {
				$scope.ofertas = [];
				for(var o in response.data) {
					$scope.ofertas.push(response.data[o]);
				}
				if($localStorage.hasOwnProperty('ofertas') &&
						$localStorage.ofertas[0].id != $scope.ofertas[0].id) {
					$localStorage.newCounter += 3;

					var forumUrl = 'http://mundofunko.com/';
					var options = {
						type: "basic",
						title: "¡Nuevas ofertas en MundoFunko!",
						message: "No te pierdas las nuevas ofertas de hoy",
						iconUrl: "img/icon128.png"
					};

					chrome.notifications.create(forumUrl, options, function(notificationId){});
					chrome.browserAction.setBadgeText({text: $localStorage.newCounter.toString()});
				}
				$localStorage.ofertas = $scope.ofertas;
				$localStorage.lastRefresh = new Date().getMilliseconds();
			}, function errorCallback(respuesta, status, headers, config) {});

		$http.get(AppSettings.api.url + 'products/' + AppSettings.api.user + '/' + AppSettings.api.pass + '/' + $localStorage.numNovedades + '/es')
			.then(function successCallback(response) {
				$scope.novedades = response.data;
				for (var i = 0; i < $scope.novedades.length; i++) {
					if($localStorage.hasOwnProperty('novedades') &&
							$scope.novedades[i].id != $localStorage.novedades[0].id) {
						var forumUrl = 'http://mundofunko.com/p/'+$scope.novedades[i].id;
						var options;
						if(!!window.chrome && !!window.chrome.webstore) {
							options = {
								type: "image",
								title: "¡Hay una Funko nueva en nuestra web!",
								message: $scope.novedades[i].name,
								iconUrl: "img/icon128.png",
								imageUrl: $scope.novedades[i].main_image
							};
						} else {
							options = {
								type: "basic",
								title: "¡Hay una Funko nueva en nuestra web!",
								message: $scope.novedades[i].name,
								iconUrl: $scope.novedades[i].main_image
							};
						}

						chrome.notifications.create(forumUrl, options, function(notificationId){});
						$localStorage.newCounter++;
						chrome.browserAction.setBadgeText({text: $localStorage.newCounter.toString()});
					} else {
						break;
					}
				}
				$localStorage.novedades = $scope.novedades;
				$localStorage.lastRefresh = new Date().getMilliseconds();
				$('.novedades.loader').hide();
				$('.novedades.novedad').show();
			}, function errorCallback(respuesta, status, headers, config) {});
	};

	$scope.init = function() {
		if(!$localStorage.hasOwnProperty('lastRefresh') || !$localStorage.hasOwnProperty('ofertas') || !$localStorage.hasOwnProperty('novedades') ||
			(new Date().getMilliseconds() - $localStorage.lastRefresh) < scheludeTime) {
			$scope.comprovar();
			$localStorage.lastRefresh = new Date().getMilliseconds();
		} else {
			$scope.ofertas = $localStorage.ofertas;
			$scope.novedades = $localStorage.novedades;
		}
	};

	chrome.notifications.onClicked.addListener(function(notificationId) {
		chrome.tabs.create({url: notificationId});
		chrome.notifications.clear(notificationId);
		if(notificationId == 'http://mundofunko.com/') {
			$localStorage.newCounter -= 3;
		} else {
			$localStorage.newCounter--;
		}

		if($localStorage.newCounter == 0) {
			chrome.browserAction.setBadgeText({text: ''});
		} else {
			chrome.browserAction.setBadgeText({text: $localStorage.newCounter.toString()});
		}
	});

	setInterval(function() {$scope.init();}, scheludeTime);
	$scope.init();

});