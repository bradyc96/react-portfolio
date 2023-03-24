import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import './index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <App />
    <Footer />
  </BrowserRouter>);

