import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store, history } from './store.tsx';
import './styles/index.css';
import './styles/tailwind.css';

const Main = () => {
  return (
    <Provider store={store}>
      <App history={history} />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
