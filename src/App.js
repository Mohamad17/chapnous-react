import React from 'react';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Main from './components/dashboard/main/Main';
import OpenSidebarProvider from './context/dashboard/OpenSidebarProvider';
import ThemePanelProvider from './context/dashboard/ThemePanelProvider';
import ServiceCategoriesProvider from './context/dashboard/ServiceCategoriesProvider';
import MessageAlertProvider from './context/dashboard/MessageAlertProvider';
import ServicesProvider from './context/dashboard/ServicesProvider';
import AttributeProvider from './context/dashboard/AttributeProvider';
import AttributeValueProvider from './context/dashboard/AttributeValueProvider';

function App() {
  return (
    <section className='bg-purple-600 dark:bg-dark-600 flex flex-row-reverse main'>
      <OpenSidebarProvider>
        <ThemePanelProvider>
          <Sidebar />
          <ServiceCategoriesProvider>
            <MessageAlertProvider>
              <ServicesProvider>
                <AttributeProvider>
                  <AttributeValueProvider>
                    <Main />
                  </AttributeValueProvider>
                </AttributeProvider>
              </ServicesProvider>
            </MessageAlertProvider>
          </ServiceCategoriesProvider>
        </ThemePanelProvider>
      </OpenSidebarProvider>
    </section>
  );
}

export default App;