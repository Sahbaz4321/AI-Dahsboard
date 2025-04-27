import React from 'react';
import { ArrowUpDown } from 'lucide-react';

function SotControl({ ascending, onSortChange }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Sort by Date:</span>
      <button
        onClick={onSortChange}
        className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span className="mr-1.5">{ascending ? 'Oldest First' : 'Newest First'}</span>
        <ArrowUpDown size={16} className="text-gray-500" />
      </button>
    </div>
  );
}

export default SotControl;
