import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Bienvenido a nuestra tienda de suplementos para gimnasio!" />
    </div>
  );
};

export default App;
