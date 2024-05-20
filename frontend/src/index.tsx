import ReactDOM from 'react-dom/client';

import { CssVarsProvider } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
// import { Provider } from 'react-redux';
// import {Provider} from "react-redux";
//
// import { persistor, store } from './store/store.ts';

import App from './App.tsx';

import 'normalize.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <CssVarsProvider>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </>
);
