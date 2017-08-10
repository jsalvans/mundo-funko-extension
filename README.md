# Mundo Funko Extension

Extensión oficial de [Mundo Funko](http://mundofunko.com/) para navegadores web. 
Una forma fácil y sencilla de no perderte ninguna nuestras ofertas y estar siempre al día de nuestras novedades.

La estensión está disponible para los siguentes navegadores:<br>
<a href="https://chrome.google.com/webstore/detail/mundo-funko/goibikienfkamlekcdhlcobgnjmaoabh" target="_blank">
  <img src="https://camo.githubusercontent.com/cde444fe44e96d20e08f84573c1cbf4f4bcbe1c5/68747470733a2f2f696d6775722e636f6d2f334334694b4f302e706e67" height="58">
</a>
<a href="https://addons.opera.com/es/extensions/details/mundo-funko/" target="_blank">
  <img src="https://camo.githubusercontent.com/6762b4a97e65d1727ad824a520fa766559ba745b/687474703a2f2f696d6775722e636f6d2f6e534a396874552e706e67" height="58">
</a><br><br>
Y pronto en los siguientes:<br>
<a href="https://addons.mozilla.org/es/firefox/addon/mundo-funko/" target="_blank">
  <img src="https://camo.githubusercontent.com/683f0e8bd1f38384994477f0c39e95f4ebd6c28c/687474703a2f2f696d6775722e636f6d2f4a5850396a69722e706e67" height="58">
</a>


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
  
- Firefox:
  1. Escribe `about:debugging` en la barra de direcciones para abrir la página de complementos.
  2. Haz clic en el botón "Cargar complemento temporal", navega hasta el archivo `build/manifest.json` y haz clic en "Abrir".
  
- Opera:
  1. Escribe `about:extensions` en la barra de direcciones para abrir la página de extensiones.
  2. Haz clic en el botón "Modo de autor".
  3. Haz clic en el botón "Cargar extensión descomprimida…", ve a la carpeta `build` y haz clic en "Aceptar".
