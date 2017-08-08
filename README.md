# Mundo Funko Extension

Extensión oficial de [Mundo Funko](http://mundofunko.com/) para navegadores web. 
Una forma fácil y sencilla de no perderte ninguna nuestras ofertas y estar siempre al día de nuestras novedades.

<a href="https://chrome.google.com/webstore/detail/mundo-funko/goibikienfkamlekcdhlcobgnjmaoabh" target="_blank"><img src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png"></a>
<a href="https://addons.mozilla.org/es/firefox/addon/mundo-funko/" target="_blank"><img src="https://www.mozilla.org/media/img/logos/firefox/logo-wordmark-large.f1831564f64e.png" height="58"></a>


# Construir y ejecutar

**Requerimientos**

- [Node.js](https://nodejs.org/es/download/)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- Credenciales de la [API de Kiory](http://api.kiory.pro)

Primero ve a la carpeta `js` e inserta tus credenciales de la API de Kiory en el archivo `mundofunko-config.js`

Entonces, en la raíz, usa los siguientes comandos:

- `npm install`
- `gulp`

Ahora puedes cargar la extensión en tu navegador a través de la página de herramientas de extensión del navegador:

- Chrome:
  1. Escribe `chrome://extensions` en tu barra de direcciones para abrir la página de extensiones.
  2. Habilitar el modo de desarrollador.
  3. Haz clic en el botón "Cargar extensión descomprimida", ve a la carpeta `build` y haz clic en "Aceptar".
  
- Firefox
  1. Escribe `about:debugging` en la barra de direcciones para abrir la página de complementos.
  2. Haz clic en el botón "Cargar complemento temporal", navega hasta el archivo `build/manifest.json` y haz clic en "Abrir".
