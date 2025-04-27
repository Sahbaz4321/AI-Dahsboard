import React from 'react';
import IncidentCard from './IncidentCard';

const IncidentList = ({ incidents }) => {
  return (
    <div>
      {incidents.map((incident) => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;
