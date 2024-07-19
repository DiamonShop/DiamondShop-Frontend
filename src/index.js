// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { isTokenExpired } from './api/TokenAPI';
// import { UserProvider } from './UserContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Check token from localStorage
// const token = localStorage.getItem("token");
// const tokenIsValid = token && !isTokenExpired(token); // Check if token exists and is not expired

// // Render the app with UserProvider
// root.render(
//   <React.StrictMode>
//     <UserProvider>
//       <App tokenIsValid={tokenIsValid} />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { isTokenExpired } from './api/TokenAPI';
import { UserProvider } from './UserContext';

// Create a root.
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Check token from localStorage
const token = localStorage.getItem("token");
const tokenIsValid = token && !isTokenExpired(token); // Check if token exists and is not expired

// Render the app with UserProvider
root.render(
  <React.StrictMode>
    <UserProvider>
      <App tokenIsValid={tokenIsValid} />
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
