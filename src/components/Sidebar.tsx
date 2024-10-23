import React from 'react';
import { Calendar, Tag, Heart, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 
                      shadow-lg transition-all duration-200 z-40
                      ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-64'}`}>
      <button
        onClick={onToggle}
        className="absolute -right-10 top-4 bg-white dark:bg-gray-800 p-2 rounded-r-md shadow-md"
      >
        <ChevronLeft className={`h-5 w-5 transition-transform duration-200 
                              ${isOpen ? '' : 'transform rotate-180'}`} />
      </button>

      <div className="p-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Calendar</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-500 mb-2" />
              {/* Calendar component would go here */}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Tags</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Tag className="h-4 w-4" />
                <span>Personal</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Tag className="h-4 w-4" />
                <span>Work</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Tag className="h-4 w-4" />
                <span>Travel</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Favorites</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Summer Vacation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Birthday Party</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}