import React from 'react';
import './App.scss';
import AppRoutes from './routes';

const App = () => {
  return (
    <React.Fragment>
      <header className="d-flex align-items-center justify-content-center">React App</header>
      <main className="main-container p-5">
        <AppRoutes />
      </main>
    </React.Fragment>
  );
}

export default App;
