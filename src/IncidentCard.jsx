import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatDate } from './Date';
import SeverityBadge from './SeverityBadge';

const IncidentCard = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4 transition-all duration-200 hover:shadow-md">
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">{incident.title}</h3>
          <div className="flex items-center space-x-3">
            <SeverityBadge severity={incident.severity} />
            <span className="text-sm text-gray-500">{formatDate(incident.reported_at)}</span>
          </div>
        </div>

        <button
          onClick={toggleExpanded}
          className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          {expanded ? (
            <>
              <span>Hide Details</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>View Details</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-100 text-gray-700 leading-relaxed animate-fadeIn">
            {incident.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentCard;
