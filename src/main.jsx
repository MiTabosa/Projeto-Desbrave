// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import './styles/Global.css';

// // Verifica se o service worker está sendo registrado
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then((registration) => {
//         console.log('Service Worker registrado com sucesso: ', registration);
//       })
//       .catch((error) => {
//         console.log('Falha ao registrar o Service Worker: ', error);
//       });
//   });
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// import React from "react";
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import './styles/Global.css';
// import { BrowserRouter } from 'react-router-dom';
// import { ProvedorAutenticacao } from './context/AutenticacaoContext.jsx';

// // // Verifica se o service worker está sendo registrado
// // if ('serviceWorker' in navigator) {
// //   window.addEventListener('load', () => {
// //     navigator.serviceWorker.register('/service-worker.js')
// //       .then((registration) => {
// //         console.log('Service Worker registrado com sucesso: ', registration);
// //       })
// //       .catch((error) => {
// //         console.log('Falha ao registrar o Service Worker: ', error);
// //       });
// //   });
// // }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <ProvedorAutenticacao>
//         <App />
//       </ProvedorAutenticacao>
//     </BrowserRouter>
//   </StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ProvedorAutenticacao } from './context/AutenticacaoContext.jsx';
import './index.css';
import './styles/Global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvedorAutenticacao>
        <App />
      </ProvedorAutenticacao>
    </BrowserRouter>
  </React.StrictMode>
);

