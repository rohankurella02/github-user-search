import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './Components/API';
import Particles from 'react-tsparticles';
import Particleconfig from './Components/Particle/Particleconfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <BrowserRouter>
        <Particles params={Particleconfig}></Particles>
        <App />
      </BrowserRouter>
    </GithubProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
