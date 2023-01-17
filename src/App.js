import React from 'react';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Main from './components/dashboard/main/Main';
import OpenSidebarProvider from './context/dashboard/OpenSidebarProvider';
import ThemePanelProvider from './context/dashboard/ThemePanelProvider';
import ServiceCategoriesProvider from './context/dashboard/ServiceCategoriesProvider';
import MessageAlertProvider from './context/dashboard/MessageAlertProvider';
import ServicesProvider from './context/dashboard/ServicesProvider';

function App() {
  return (
    <section className='bg-purple-600 dark:bg-dark-600 flex flex-row-reverse main'>
      <OpenSidebarProvider>
        <ThemePanelProvider>
          <Sidebar />
          <ServiceCategoriesProvider>
            <MessageAlertProvider>
              <ServicesProvider>
                <Main />
              </ServicesProvider>
            </MessageAlertProvider>
          </ServiceCategoriesProvider>
        </ThemePanelProvider>
      </OpenSidebarProvider>
    </section>
  );
}

export default App;