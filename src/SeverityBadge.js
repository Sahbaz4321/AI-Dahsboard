import React from 'react';

const SeverityBadge = ({ severity }) => {
  const badgeClasses = {
    Low: 'bg-blue-100 text-blue-800 border-blue-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    High: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeClasses[severity]}`}
    >
      {severity}
    </span>
  );
};

export default SeverityBadge;
