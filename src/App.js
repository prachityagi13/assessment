import React from 'react';
import Header from './component/Header/Header';
import Sidebar from './component/SideBar/Sidebar';
import LeadDetails from './component/LeadDetails/LeadDetails';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main>
          <LeadDetails />
        </main>
      </div>
    </div>
  );
}

export default App;
