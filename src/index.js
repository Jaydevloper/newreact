import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Headers from './headers/Headers';
import Main from './Main/Main';
import Card from './Main/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headers></Headers>
    <main className='site-main container'>
    <Main></Main>
    <Card></Card>
    </main>
  </React.StrictMode>
);


