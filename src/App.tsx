import React, { useState } from 'react';
import { Calendar, Settings, PenSquare, Sun, Moon, Search } from 'lucide-react';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isRightPanelOpen, setRightPanelOpen] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <PenSquare className="h-8 w-8 text-blue-500" />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">MyDiary</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? 
                  <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : 
                  <Moon className="h-5 w-5 text-gray-500" />
                }
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Left Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

        {/* Main Editor Area */}
        <main className={`flex-1 transition-all duration-200 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } ${isRightPanelOpen ? 'mr-64' : 'mr-0'}`}>
          <Editor />
        </main>

        {/* Right Panel */}
        <RightPanel isOpen={isRightPanelOpen} onToggle={() => setRightPanelOpen(!isRightPanelOpen)} />
      </div>
    </div>
  );
}

export default App;