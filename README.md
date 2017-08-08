# Mundo Funko Extension

Extensión oficial de Mundo Funko para navegadores web. 
Una forma fácil y sencilla de no perderte ninguna nuestras ofertas y estar siempre al día de nuestras novedades.


# Construir y ejecutar

**Requerimientos**

- [Node.js](https://nodejs.org/es/download/)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)

Usa los siguientes comandos:

- `npm install`
- `gulp`

Ahora puedes cargar la extensión en su navegador a través de la página de herramientas de extensión del navegador:

- Chrome/Opera:
  1. Escribe `chrome://extensions` en tu barra de direcciones para abrir la página de extensiones.
  2. Habilitar el modo de desarrollador (checkbox)
  3. Haga clic en el botón "Cargar extensión descomprimida", vaya a la carpeta `build` de su instancia de extensión local y haga clic en "Aceptar".
- Firefox
  1. Escribe `about:debugging` en la barra de direcciones para abrir la página de complementos.
  2. Haga clic en el botón `Cargar complemento temporal`, navegue hasta el archivo `build/manifest.json` y "Abrir".
