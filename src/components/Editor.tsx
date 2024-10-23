import React, { useState } from 'react';
import { Image, MapPin, Tag, Save } from 'lucide-react';

export default function Editor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-3xl font-bold mb-4 bg-transparent border-none outline-none 
                   text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        
        <div className="flex space-x-4 mb-4">
          <button className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
            <Image className="h-4 w-4 mr-2" />
            Add Image
          </button>
          <button className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
            <MapPin className="h-4 w-4 mr-2" />
            Add Location
          </button>
          <button className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
            <Tag className="h-4 w-4 mr-2" />
            Add Tags
          </button>
        </div>

        <textarea
          placeholder="Write your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[calc(100vh-300px)] bg-transparent border-none outline-none resize-none
                   text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500"
        />

        <div className="flex justify-end mt-4">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md 
                           hover:bg-blue-600 transition-colors">
            <Save className="h-4 w-4 mr-2" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}