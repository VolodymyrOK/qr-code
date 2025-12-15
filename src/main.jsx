import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import s from './main.module.css';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
