## Autor
- [Jaider Steeven Mendoza Cardona](https://github.com/Dabrox02)

# Proyecto PokeAPI
Este proyecto consiste en la integración de las tecnologias aprendidas HTML, CSS y JavaScript, con el fin de consumir las API's de [PokeAPI](https://pokeapi.co/) y [MockAPI](https://mockapi.io/).

## Tecnologias
Para la concepción del proyecto se hizo uso de las siguientes tecnologias, las cuales se integraron para crear el proyecto:

- HTML (HyperText Markup Language)
- SCSS (Syntactically Awesome Style Sheets)
- Bootstrap
- JavaScript
- [PokeAPI](https://pokeapi.co/)
- [MockApi](https://mockapi.io/)

## Requisitos Minimos
Para garantizar una implementación exitosa de la aplicación web:

- Acceso a Internet
- Dispositivo Compatible
- Navegador Compatible:
  - [Mozilla Firefox](https://www.mozilla.org/es-ES/firefox/new/)
  - [Google Chrome](https://www.google.com/chrome/)



## Guía de Instalación y Configuración de json-server
### Requisitos previos:
- **NVM** es una herramienta que te permite administrar múltiples versiones de Node.js en tu máquina.

**Instalación de NVM en Linux y macOS**
1. Abre tu terminal.
2. Utiliza `curl` o `wget` para descargar el script de instalación de NVM desde el repositorio oficial de GitHub. Puedes usar uno de los siguientes comandos:

   Utilizando `curl`:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   ```

   Utilizando `wget`:

   ```bash
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   ```

   Asegúrate de verificar la URL en el comando con la versión actual de NVM en [GitHub](https://github.com/nvm-sh/nvm).

3. Después de ejecutar el comando, seguirás las instrucciones en la terminal para completar la instalación.

4. Cierra y vuelve a abrir tu terminal o ejecuta `source ~/.bashrc` o `source ~/.zshrc` (dependiendo de tu shell) para cargar NVM en tu sesión actual.

***
**Uso de NVM**

Una vez instalado NVM, puedes usar los siguientes comandos para gestionar las versiones de Node.js en tu sistema:

- Para instalar una versión específica de Node.js, por ejemplo, Node.js ultima version estable:
  ```bash
  nvm install --lts
  ```
- Para seleccionar una versión específica de Node.js para usar:

  ```bash
  nvm use <version>
  ```
Recuerda consultar la [documentación oficial de NVM](https://github.com/nvm-sh/nvm) para obtener más detalles y opciones de configuración avanzadas.
***

## Instalación json-server

Abre tu terminal y ejecuta el siguiente comando para instalar `json-server`:

```bash
npm install -E -D json-server
```

Esto instalará `json-server` con la ultima version estable de acuerdo a nuestra versión de Node.js

## Ejecución de json-server

**Inicia json-server:**
En tu terminal, ejecuta `json-server` y especifica el archivo JSON que deseas utilizar como fuente de datos:

```bash
json-server --watch db.json --port 5855
```

Si clonas este repositorio, puedes utilizar el siguiente comando:
```bash
npm run dev
```

Esto iniciará `json-server` y lo configurará para escuchar en el puerto `5855`. Ahora, la API REST simulada estará disponible en `http://localhost:5855`.


**Acceso a la API:**
Puedes acceder a la API a través del endpoint `pokemons`:
```bash
http://localhost:5855/pokemons
```


## Implementación
### Interacción con la PokeAPI
Esta es una API de solo consumo. No se requiere autenticación para acceder a esta API y todos los recursos están completamente abiertos y disponibles. 

**API URI:** `https://pokeapi.co/api/v2/`

Para acceder a los datos de la API se uso el **endpoint** `pokemon`.

**URL:** `https://pokeapi.co/api/v2/pokemon`

***

### Interaccion con la API json-server
### Esquema de los datos
| Campo   | Tipo      |
| ------- | --------- |
| id      | Object ID |
| name    | STRING    |
| stats   | ARRAY     |
| sprites | OBJECT    |

***
**API URI:** `http://localhost:5855/`

Para acceder a los datos almacenados se hace uso del **endpoint** `pokemons`.

**URL:** `http://localhost:5855/pokemons`
***

## Uso de la Aplicación
Esta aplicación web permite explorar tarjetas de Pokémon con sus imágenes y nombres. Puedes hacer clic en cada una de las tarjetas para ver detalles más completos del Pokémon, además, puedes guardar estadísticas personalizadas de un Pokémon y filtrar Pokémon por tipo.

***

### Ver las estadisticas de un Pokemon
Para ver las estadisticas del pokemon que desees, seleccionalo y da **CLIC** en el.

<div align="center">
  <h3>Paso 1</h3>
  <img src="readmeAssets/VER_ESTADISTICAS_1.png">
  <h3>Paso 2</h3>
  <img src="readmeAssets/VER_ESTADISTICAS_2.png" width="300">
</div>

***

### Limitar Cantidad de Pokemones para ver
Para cambiar la cantidad de pokemones en la parrilla, ubicate en la parte inferior central de la pantalla y selecciona el campo **LIMITE**, digita la cantidad de pokemones que deseas ver entre 1 a 999.


<div align="center">
  <h3>Paso 1</h3>
  <img src="readmeAssets/LIMITAR_POKEMON_1.png">
  <h3>Paso 2</h3>
  <img src="readmeAssets/LIMITAR_POKEMON_2.png">  
</div>

***

### Filtrar por tipo de Pokemon
Para filtrar por tipo, da **CLIC** en el botón de la parte superior izquierda y selecciona el tipo de pokemon que deseas ver.

<div align="center">
  <h3>Paso 1</h3>
  <img src="readmeAssets/FILTRAR_POKEMON_1.png">
  <h3>Paso 2</h3>
  <img src="readmeAssets/FILTRAR_POKEMON_2.png" width="300">  
</div>

***

### Cambiar Estadisticas Pokemon
Para cambiar las estadisticas del pokemon que desees, seleccionalo y da **CLIC** en el, luego modifica sus valores y dale en **AJUSTAR**.

<div align="center">
  <h3>Paso 1</h3>
  <img src="readmeAssets/VER_ESTADISTICAS_1.png">
  <h3>Paso 2</h3>
  <img src="readmeAssets/AJUSTAR_POKEMON_1.png" width="300">  
</div>

***

## Resultado
<div align="center">
  <a href="https://dabrox02.github.io/proyecto-pokeapi/" target="_blank">
      Click Aqui para Ver
      <img src="readmeAssets/RESULTADO_1.png">
  </a>
</div>