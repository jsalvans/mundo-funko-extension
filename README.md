# Mundo Funko Extension

Extensión oficial de [Mundo Funko](http://mundofunko.com/) para navegadores web. 
Una forma fácil y sencilla de no perderte ninguna nuestras ofertas y estar siempre al día de nuestras novedades.

La estensión está disponible para los siguentes navegadores:<br>
<a href="https://chrome.google.com/webstore/detail/mundo-funko/goibikienfkamlekcdhlcobgnjmaoabh" target="_blank"><img src="https://s-media-cache-ak0.pinimg.com/originals/6a/34/1e/6a341ef5ca34e6b2080c7fa50476329a.png" height="58"></a><br><br>
Y pronto en los siguientes:<br>
<a href="https://addons.mozilla.org/es/firefox/addon/mundo-funko/" target="_blank"><img src="http://4.bp.blogspot.com/-ZHixWmbaR-M/VSo81IfExlI/AAAAAAAAFgE/DoPCiKnc5nc/s1600/firefox_logo-only_RGB.png" height="58"></a>
<img src="https://vignette2.wikia.nocookie.net/central/images/1/1d/Opera-icon-high-res.png/revision/latest/scale-to-width-down/477?cb=20151126225931" height="58">


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
