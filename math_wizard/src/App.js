import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'
// import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
const App = () => {
  const activeMenu = false; 
    return (
        // <div className={currentMode === 'Dark' ? 'dark' : ''}>
          <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
              content="Settings"
              position="Top"
            >
              
              </TooltipComponent>
            </div>
            {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              Sidebar
            </div>
          )}

          <div className={'dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? }'
        
        }>

          


            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              
            </div>
            </div>
            <div>
              
              <Routes>
                
                
              </Routes>
            </div>
            </div>
          </BrowserRouter>
         //</div>
      ); 
    }

export default App