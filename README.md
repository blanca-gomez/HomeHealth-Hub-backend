# HomeHealth-Hub-backend
API de salud que permite al  usuario gestionar su medicación, sus constantes vitales y sus citas médicas. El usuario puede registrarse y luego con sus credenciales iniciar sesión. Al iniciar sesión accede al dashboard, donde aparece el nombre del usuario que ha iniciado sesión, también aparece un calendario semanal para saber cuando tomar cada medicación y un apartado con la información del clima local. 
La aplicación tambien permite añadir, editar y eliminar medicación, constantes vitales y citas médicas.

## Usuario ya creado para comprobar funcionalidad.
usuario: javi@mail.com
contraseña: abcd1234

## Estructura
-**Registro e inicio de sesión**: permite al usuario registrarse y acceder a su cuenta con sus datos.
-**Dashboard**: muestra el nombre del usuario que ha iniciado sesión. Inlcuye tambiémn un calendario semanal para saber cuando tomar la medicación y la información del clima local en ºC.
-**Mi medicación**: ver la lista de medicamentos, añadir uno nuevo, editar o eliminar.
-**Mis constantes vitales**: ver la lista de constantes vitales, añadir una nueva, editar o eliminar.
-**Mis citas médicas**: ver la lista de citas médicas, añadir una nueva, editar o eliminar.
-**Perfil**: muestra algunos datos del usuario que ha iniciado sesión.

## Instalación
##Backend
1-**Clona el repositorio**:
     ```bash
    https://github.com/blanca-gomez/HomeHealth-Hub-backend
2-**Instala dependencias**:
    npm install
3-**Inicia el servidor**:
    node server.js

##Frontend
1-**Clona el repositorio**:
     ```bash
    https://github.com/blanca-gomez/HomeHealth-Hub-frontend
2-**Instala dependencias**:
    npm install
3-**Inicia la aplicación con Vite**:
    npm run dev


## Estructura del proyecto
##Backend
-`/config`: configuración del entorno y la base de datos.
-`/controlles`: lógica patra manejar las solicitudes CRUD.
-`/middlewares`: middleware para verificar la autenticación del usuario.
-`/models`: modelo de datos para MongoDB.
-`/routes`: estructura de las rutas para la API.
-`/server.js`: archivo principal para iniciar el servidor.

##Frontend
-`/public`: contiene archivos estáticos.
-`/src`: código fuente de la aplicación.
    -`/components`: contiene los componentes de react.
    -`/contexts`: contiene los contextos de react para el estado global.
-`/HTML`: contiene el archivo HTML con el calendario que se muestra en el dashboard.
-`App.css`: estilos para el componente App.
-`index.css`: estilos globales para la aplicación.
-`/main.jsx`: punto de entrada para renderizar la aplicación react.
-`App.jsx`: componente principal de la aplicación react.


## USO
-**Registro e inicio de sesión**:
    -Accede a /signUp para crear una nueva cuenta.
    -Accede a /signIn para iniciar sesión.
-**Dashboard**:
    - Accede a /dashboard para ver la página principal de la sesión, que incluye calendario, tiempo , barra de navegación y el boton de acceder a mi perfil.
-**Mi medicación**:
    -Accede a /medications para ver la lista de medicamentos con la opción de eliminar y editar cada uno de ellos. 
    -Accede a /medication/add para añadir un nuevo medicamento.
    -Accede a /medication/edit/:id para editar un medicamento.
-**Mis constantes vitales**:
    -Accede a /vitals para ver la lista de constantes vitales con la opción de eliminar y editar cada una de ellas.
    -Accede a /vitals/add para añadir una nueva constante vital.
    -Accede a /vitals/edit/:id para editar una constante vital.
-**Mis citas médicas**: 
    -Accede a /appoinments para ver la lista de citas médicas con la opción de eliminar y   editar cada una de ellas.
    -Accede a /appoinments/add para añadir una nueva cita médica.
    -Accede a /appoinments/edit/:id para editar una cita médica.
-**Perfil**:
    -Accede a /user para ver los datos del usuario


## Endpoints
-**Medication routes**:
    -`GET '/medications`: obtener todas las medicaciones.
    -`POST '/medications`: añadir una nueva medicación.
    -`PUT '/medications/:id`: actualizar una medicación.
    -`DELETE '/medications/:id`: eliminar una medicación.
-**Vital routes**:
    -`GET '/vitals`: obtener todas las constantes vitales.
    -`POST '/vitals`: añadir una nueva constante vital.
    -`PUT '/vitals/:id`: actualizar una constante vital.
    -`DELETE '/vitals/:id`: eliminar una constante vital.
-**Appoinment routes**:
    -`GET '/appoinments`: obtener todas las citas médicas.
    -`POST '/appoinments`: añadir una nueva cita médica.
    -`PUT '/appoinments/:id`: actualizar una cita médica.
    -`DELETE '/appoinments/:id`: eliminar una cita médica.
    
