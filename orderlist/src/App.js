import React from 'react';
import Header from './components/Header';
import OrderList from './components/OrderList';


function App() {
  return (
    <div>
      <header>
        <Header 
          title={"Order List"}
        />
        
        <OrderList />
      </header>
    </div>
  );
}

export default App;
