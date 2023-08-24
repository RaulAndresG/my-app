# CURSO NODE RAUL ANDRES GOMEZ 

- LANZAMIENTO DE CODIGO 

Navegador 
-
Este código es la base de una aplicación web hecha con React. Lo que hace es importar las herramientas necesarias y luego crear un lugar especial en la página (llamado "root") donde React mostrará la aplicación. A continuación, coloca el componente principal de la aplicación en ese lugar para que se vea en la página web.

```javascript
import React from 'react';
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


