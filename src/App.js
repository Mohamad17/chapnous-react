import React from 'react';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Main from './components/dashboard/main/Main';
import OpenSidebarProvider from './context/dashboard/OpenSidebarProvider';

function App() {
  return (
    <section className='bg-purple-600 flex main'>
      <OpenSidebarProvider>
        <Sidebar />
        <Main />
      </OpenSidebarProvider>
    </section>
  );
}

export default App;
