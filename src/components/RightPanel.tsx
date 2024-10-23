import React from 'react';
import { Cloud, Smile, Tag, Lock, ChevronRight } from 'lucide-react';

interface RightPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function RightPanel({ isOpen, onToggle }: RightPanelProps) {
  return (
    <aside className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 
                      shadow-lg transition-all duration-200 z-40
                      ${isOpen ? 'w-64 translate-x-0' : 'w-64 translate-x-64'}`}>
      <button
        onClick={onToggle}
        className="absolute -left-10 top-4 bg-white dark:bg-gray-800 p-2 rounded-l-md shadow-md"
      >
        <ChevronRight className={`h-5 w-5 transition-transform duration-200 
                               ${isOpen ? '' : 'transform rotate-180'}`} />
      </button>

      <div className="p-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Weather</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <Cloud className="h-5 w-5 text-blue-500 mb-2" />
              <p className="text-gray-600 dark:text-gray-300">Partly Cloudy</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">72°F</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Mood</h2>
            <div className="grid grid-cols-4 gap-2">
              <button className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 
                               dark:hover:bg-gray-600">
                <Smile className="h-6 w-6 text-yellow-500" />
              </button>
              {/* Add more mood buttons */}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Tags</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 
                               dark:text-blue-200 rounded-full text-sm">
                #personal
              </button>
              <button className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 
                               dark:text-green-200 rounded-full text-sm">
                #work
              </button>
              <button className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 
                               dark:text-purple-200 rounded-full text-sm">
                #travel
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Privacy</h2>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Lock className="h-4 w-4" />
              <span>Private</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}