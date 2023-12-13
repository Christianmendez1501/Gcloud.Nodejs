# Proyecto de despliegue de aplicacion🌀.
* ![React Icon](https://reactjs.org/favicon.ico) ![Node.js Icon](https://nodejs.org/static/images/logo.svg) ![MongoDB Icon](https://img.icons8.com/color/96/000000/mongodb.png) ![GCP Icon](https://img.icons8.com/color/96/000000/google-cloud.png)


### Introducción al Proyecto 🚀
¡Bienvenido al emocionante proyecto de implementación en la nube de una aplicación web con React, Node.js y MongoDB! 

* Imagina un entorno donde puedes desplegar tu aplicación y asegurar una conexión suave entre el cliente, el servidor y la base de datos.

### Desafío Planteado 💡
￼
Desde el equipo de desarrollo full-stack, nos llega una aplicación deslumbrante con tecnologías modernas. La misión: desplegarla en dos instancias de Cloud Run y garantizar la conectividad perfecta entre todas las partes.

![react](img/planteamiento.png)

## Estrategia de Resolución 🛠️

### Conexión Segura con MongoDB
Después de configurar nuestra base de datos en MongoDB, utilizaremos Compass para establecer una conexión segura. Necesitamos una cadena de conexión adecuada, que guardaremos como un secreto en el Secret Manager:

### Cadena de Conexión MongoDB:

* mongodb+srv://<username>:<password>@cluster0.2lnyz2p.mongodb.net/

### Secreto Seguro:

Almacenamos la cadena de conexión como un secreto en el Secret Manager de nuestro proveedor en la nube.

### Configuración del Despliegue Automático ⚙️

Durante la configuración del trigger en Cloud Build, cada push desencadena el despliegue automático. Sin embargo, enfrentamos un reto al conectar con la base de datos debido a las limitaciones de las IP variables en Cloud Run.

### Solución Creativa:
Para superar esta barrera, optamos por permitir el acceso desde cualquier IP.

### Conexión Fluida entre Servidor y Cliente 🌐
Una vez creado el servidor, es crucial proporcionar su URL al front-end. Ajustamos la variable backendUrl en el cliente para permitir operaciones cruciales como la creación de usuarios y la consulta de datos.
Pasos para una Conexión sin Fisuras:
* 		Creación del Servidor:
    * Después de configurar el servidor, proporcionamos su URL al front-end.
* 		Configuración en el Cliente:
    * Ubicamos y ajustamos las variables backendUrl en los archivos Create.jsx y UserDatabase.jsx dentro de la carpeta client.
* 		Sincronización Crucial:
    * Este ajuste es vital para permitir que el front-end realice solicitudes al back-end, especialmente en las operaciones esenciales.
Con la URL del servidor actualizada con éxito en el front-end, avanzamos configurando un segundo trigger en Cloud Build. Este paso es esencial para garantizar la sincronización entre los cambios de código y la ejecución de las tareas definidas en el archivo cloudbuild.yaml. ¡Despliega tu aplicación y hazla brillar en la nube! 🚀🌐