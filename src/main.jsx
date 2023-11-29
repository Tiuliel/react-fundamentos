/*  Importação das libs ESSENCIAIS (React e ReactDOM) */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Importação do primeiro/principal  componete, 
arquivo em que carregamos os elementos da página (como se fosse um index.html) */
import App from './App.jsx'


/* Inicialização dos recursos do React, manipulando a div#root existente no index.html */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
