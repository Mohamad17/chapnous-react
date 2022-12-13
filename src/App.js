import React from 'react';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Main from './components/dashboard/main/Main';
import OpenSidebarProvider from './context/dashboard/OpenSidebarProvider';
import ThemePanelProvider from './context/dashboard/ThemePanelProvider';

function App() {
  return (
    <section className='bg-purple-600 dark:bg-dark-600 flex main'>
      <OpenSidebarProvider>
        <ThemePanelProvider>
          <Sidebar />
          <Main />
        </ThemePanelProvider>
      </OpenSidebarProvider>
    </section>
  );
}

export default App;
