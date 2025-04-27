import React from 'react';

const FilterControl = ({ currentFilter, onFilterChange }) => {
  const filters = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
      <span className="text-sm font-medium text-gray-700 mr-3 mb-2 sm:mb-0">Filter by Severity:</span>
      <div className="flex space-x-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              currentFilter === filter
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-500'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterControl;
