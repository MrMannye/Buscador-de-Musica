# PRUEBA TECNICA CANCIONES

Aplicacion que obtiene los primeros 5 Albums, Artistas y Canciones de una API para ser mostradas en pantalla
El buscador solo realiza la peticion a la API una vez que el usuario hayad dejado de teclear en el buscador 

## Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.

## Uso

1. Ejecuta `npm run dev` para iniciar la aplicación.
2. Abre tu navegador y visita `http://localhost:5173/`.

## Componentes Basicos 
Componentes Básicos

## Componentes Básicos

El proyecto cuenta con los siguientes componentes básicos:

- SearchBar: Contiene el campo de búsqueda.
- SearchResults: Muestra los resultados de la búsqueda (álbumes, canciones y artistas).
- ResultItem: Muestra un elemento individual (álbum, canción o artista) en la lista de resultados.

## Funcionalidades

El proyecto cuenta con las siguientes funcionalidades:

1. Obtención de los primeros 5 álbumes, artistas y canciones de una API.
2. Mostrar los resultados en pantalla.
3. Búsqueda en tiempo real: la petición a la API se realiza una vez que el usuario ha dejado de teclear en el buscador.
4. Filtra los resultados para mostrar solo los últimos 5 álbumes, canciones y artistas.
5. Para evitar varios llamados a la API se utiliza un setTimeout y si el usuario aun sigue tecleando
se borra el timeOut anterior guardado en el Stack para solo realizar la ultima peticion

¡Estas son las principales funcionalidades del proyecto!

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.