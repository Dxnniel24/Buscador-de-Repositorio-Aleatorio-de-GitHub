# Buscador Aleatorio de Repositorios de GitHub

Este proyecto es una aplicación web que permite explorar repositorios populares aleatorios de GitHub según el lenguaje de programación seleccionado. Es útil para descubrir nuevos proyectos y desarrolladores en la comunidad de código abierto.

## Características

- Selección dinámica de lenguajes desde una fuente externa.
- Consulta de repositorios populares mediante la GitHub API.
- Visualización aleatoria de repositorios destacados.
- Muestra información relevante: nombre, descripción, estrellas, forks e issues abiertos.
- Botón para ver otro repositorio aleatorio del mismo lenguaje.

## Buscador-de-Repositorio-Aleatorio-de-GitHub/ 
   ├── index.html # Página principal
   
   ├── styles_rag.css # Estilos personalizados
   
   ├── scripts_rag.js # Lógica en JavaScript
   
   └── README.md # Documentación del proyecto

## Cómo usar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Dxnniel24/Buscador-de-Repositorio-Aleatorio-de-GitHub.git
   cd Buscador-de-Repositorio-Aleatorio-de-GitHub
Abre el archivo index.html en tu navegador.

Selecciona un lenguaje del menú desplegable y espera a que cargue un repositorio aleatorio.

Usa el botón "Ver otro repositorio" para descubrir más.

## Tecnologías utilizadas
 - HTML5

 - CSS3

 - JavaScript (Vanilla)

 - GitHub REST API

## Lista de lenguajes obtenida de:
https://github.com/kamranahmedse/githunt/blob/master/src/components/filters/language-filter/languages.json

## Consideraciones
Este proyecto utiliza la API pública de GitHub sin autenticación, por lo que puede verse limitado por el rate limit (60 solicitudes por hora).

Es necesario tener conexión a internet para que funcione correctamente.

Desarrollado por [Dxnniel24](https://github.com/Dxnniel24)
