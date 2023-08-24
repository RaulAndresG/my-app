# CURSO REACT RAUL ANDRES GOMEZ 

- LANZAMIENTO DE CODIGO 

Navegador 
-
Este código es la base de una aplicación web hecha con React. Lo que hace es importar las herramientas necesarias y luego crear un lugar especial en la página (llamado "root") donde React mostrará la aplicación. A continuación, coloca el componente principal de la aplicación en ese lugar para que se vea en la página web.

```javascript
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```
En resumen, este código inicia una aplicación web construida con React y muestra la parte principal de esa aplicación en la página web. A partir de ahí, React se encarga de manejar la interfaz de usuario y las interacciones del usuario.

---

importar REACT DOM
-
Con este cofigo importamos al algun objeto de react dom desde la libreria de terceros de react dom  que es una dependencia que se decarga y se instala localmente "react-dom": "^18.2.0" ,
```javascript
import ReactDOM from 'react-dom/client';

```
--- 

<h1>App</h1>
-
Archivo App.js el cual contiene la funcion de app en donde luego exportamos la  funcion 
Espesificamente Este fragmento de código es un componente de React llamado "App" que muestra un título con el texto "leart React" dentro de un elemento  Este componente puede ser utilizado en una aplicación React más amplia y se exporta para su uso en otros archivos

```javascript

function App() {
  return (
    <div>
<h1>  leart React</h1>
    </div>
  );
}

export default App;

```

Correr el servidor 
-

comando que se ejecuta en la terminal para lanzar el servidor 


```javascript
npm run start
```