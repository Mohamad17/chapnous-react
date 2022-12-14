import React from 'react';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Main from './components/dashboard/main/Main';
import OpenSidebarProvider from './context/dashboard/OpenSidebarProvider';
import ThemePanelProvider from './context/dashboard/ThemePanelProvider';
import ServiceCategoriesProvider from './context/dashboard/ServiceCategoriesProvider';

function App() {
  return (
    <section className='bg-purple-600 dark:bg-dark-600 flex flex-row-reverse main'>
      <OpenSidebarProvider>
        <ThemePanelProvider>
          <Sidebar />
          <ServiceCategoriesProvider>
            <Main />
          </ServiceCategoriesProvider>
        </ThemePanelProvider>
      </OpenSidebarProvider>
    </section>
  );
}

export default App;
