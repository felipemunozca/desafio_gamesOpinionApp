# Curso Desarrollo de Aplicaciones Front-end Trainee 2023
Evaluación Final del Modulo 6 - Desarrollo de Interfaces Interactivas con Framework VUE

## REQUERIMIENTOS:
1. Crear el proyecto mediante el entorno de desarrollo de Vue-CLI, el cual debe contener:
	- Vue Router.

2. Desarrollar los componentes y vistas necesarios para mantener un buen flujo en el desarrollo del proyecto.
	- Cada componente hijo debe tener un componente padre, respectivo en la carpeta de views, que lo contenga y anide.
	- Deberá contener un navbar con solo el botón que dirija a la vista “Home”

3. Implementar eventos y directivas propias de Vue.js para manipular y controlar el contenido de la aplicación.
	- Implementar métodos para manejar los eventos y agregar funcionalidad a los componentes.
	- Utilizar a lo largo del proyecto las directivas necesarias como: v-bind, v-for, v-if, v-model, v-text o v-on.

4. Utilizar Vue Router para controlar rutas y redireccionamientos.
	- Crear una ruta que permita mostrar un mensaje “404” en caso de rutas no encontradas. 
	- Implementar una ruta dinámica para reconocer el nombre del juego del cual se va a opinar en la vista opiniones.
	- Utilizar lazy loading a una ruta a elección

5. Utilizar la API de [rawg.io/apidocs](https://rawg.io/apidocs)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
