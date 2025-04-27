import React, { useState } from 'react';
import incidentsData from './incidents';
import FilterControl from './FilterControl';
import SotControl from './SotControl';
import IncidentCard from './IncidentCard';
import NewIncidentForm from './NewIncidentForm';
import IncidentDashboard from './IncidentDashboard';

export default function App() {
 
  return (
    <>
    <IncidentDashboard/>
    </>
  );
}
