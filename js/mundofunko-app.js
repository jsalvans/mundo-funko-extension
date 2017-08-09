var mfApp = angular.module('MundoFunkoBrowserExtApp', ['ngStorage', 'ngScrollbars']).config(function() {});

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
			whileScrolling: function() {
				if ($("#mCSB_1_container").position().top <= -280) {
					$("#titulo-fix").html("Novedades");
				} else {
					$("#titulo-fix").html("Ofertas");
				}
			}
		}
	};
});

var scheludeTime = 30000;