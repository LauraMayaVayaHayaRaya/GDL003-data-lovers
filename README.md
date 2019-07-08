# Data Lover: Rick and Morty...Useless Data
## Índice

- [Descripción](#resumen-del-proyecto)
- [Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
- [Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
- [Documentación](#documentacion)

---

## Resumen del proyecto

El proyecto es una página web que visualiza información que proviene de un objeto JSON.

La temática del proyecto es Rick and Morty y está enfocado en los fans de la serie para que puedan visualizar, filtrar y ordenar la información de los personajes, capítulos y locaciones de la serie.

## Documentación

El proyecto está estructurado de la siguiente manera:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── rickandmorty
│   │   │   ├── rickandmorty.js
│   │   │   └── rickandmorty.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Existe un archivo `index.html` que es la página con la que interactúa el usuario. También aqui incluímos los `<script>` que necesita el sitio y el llamado al archivo CSS.

### `src/main.js`

En este archivo se hacen todos los procesos para mostrar datos en pantalla. Desde la interacción con el DOM hasta la definici{on de los event listeners para el llamado de funciones.

### `src/data.js`

En este archivo está la funcionalidad del proyecto. Contiene 2 funciones:
- **filter(results, specie)**: Acepta como primer parámetro un array con el set de elementos que se desean filtrar y como segundo parámetro el valor sobre el cual filtrar. La funcion regresa un nuevo array con solo los elementos que coincidan con el segundo parámetro
- **sort(key, order)**: Esta función se utiliza para ordenar de manera ascendente o descendente el set de elementos que se han mostrado en el sitio. El primer parámetro permite indicar sobre que llave del objeto ordenar y el segundo parámetro sirve para indicar si el ordenamiento será ascendente o descendente. Por default, si no se pasa el valor de order, la función ordenará los resultados de manera ascendente.

### `src/data`

En esta carpeta está el set de elementos que se utilizan en el proyecto.

### `test/data.spec.js`

** en proceso **

---

## Prototipo de Baja Fidelidad
![prototipado1](https://raw.githubusercontent.com/LauraMayaVayaHayaRaya/GDL003-data-lovers/master/src/img/IMG-20190707-WA0005.jpg)

![prototipado2](https://raw.githubusercontent.com/LauraMayaVayaHayaRaya/GDL003-data-lovers/master/src/img/IMG-20190707-WA0004.jpg)

## Prototipo de Alta Fidelidad
Ver en [Figma](https://www.figma.com/file/Dt4WMMXg6e6s1D7ugKrfm1nS/Untitled?node-id=22%3A47)
