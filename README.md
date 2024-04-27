Entrega final proyecto reactjs del curso propiamente dicho de coderhouse!

Este es una pagina de Ecomerce con conexión a FireBase de tickets, merchandising y musica electronica por ello el nombre Argentech. Este trabajo fue desarrollado principalmente en ReactJS aplicando los conocimientos adquiridos durante la cursada, algunos de ellos: promises, asincronía, MAP, hooks, children, patrones, routing y navegación,eventos, context, etc.
El uso de estado (useState), manejo de promesas con hooks de React (useState), captura de urls dinamicas con el hook useParams.
Manejos de links tanto para cambiarlos como la captura de ellos para renderizar componentes con el uso de componentes Link, BrowseRouter, Routes y Route para lograr tener una SPA (single page aplication), de manera que podemos hacer peticiones mas concisas y precisas a Firebase para evitar datos innecesarios que el usuario no requiera.
Gestion del carrito de la pagina con un estado global en el contexto de la pagina gracias a useContext, con funciones para restar objetos, agregarlos o eliminar el arreglo, por ultimo el manejo de datos del usuario a traves del formulario, donde con una funcion creamos un objeto que almacenara los datos del mismo, la compra y el monto total para enviarse a FireBase a una coleccion distinta donde archivamos la informacion.
Se refactorizo para tener un codigo mas legible y el uso de CustomHooks para aliviar la logica que manejan los componentes, detalles de accesibilidad el uso de la propiedad htmlFor para tener mejor posicionamiento del CEO.
Tambien se implemento el uso de Firebase de Google como herramienta BackEnd para el almacenamiento de los datos de productos y ordenes de compra, Para los estilos se utilizo biblioteca React Boostrap y SeetAlert2 para las alertas de productos añadidos al carrito y el checkout de la compra.


