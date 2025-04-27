import React, { useState, useEffect } from 'react';
import { mockIncidents } from './incidents';
import { sortByDate } from './Date';
import FilterControl from './FilterControl';
import SortControl from './SotControl';
import IncidentList from './IncidentList';
import ReportIncidentForm from './NewIncidentForm';

export default function IncidentDashboard() {
  const [incidents, setIncidents] = useState([]);
  const [filteredIncidents, setFilteredIncidents] = useState([]);
  const [filter, setFilter] = useState('All');
  const [ascending, setAscending] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIncidents(mockIncidents);
  }, []);

  useEffect(() => {
    let result = [...incidents];

    if (filter !== 'All') {
      result = result.filter(incident => incident.severity === filter);
    }

    result = result.sort((a, b) => sortByDate(a.reported_at, b.reported_at, ascending));

    setFilteredIncidents(result);
  }, [incidents, filter, ascending]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortChange = () => {
    setAscending(!ascending);
  };

  const handleSubmitIncident = (newIncident) => {
    const incidentToAdd = {
      ...newIncident,
      id: Math.max(0, ...incidents.map(inc => inc.id)) + 1
    };

    setIncidents(prev => [...prev, incidentToAdd]);
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 sm:p-8 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">AI Safety Incident Dashboard</h1>
        <p className="opacity-90">Monitor and track AI safety incidents across your organization</p>
      </div>

      <div className="mb-6 p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <FilterControl currentFilter={filter} onFilterChange={handleFilterChange} />
          <SortControl ascending={ascending} onSortChange={handleSortChange} />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Incidents ({filteredIncidents.length})</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            {showForm ? 'Close Form' : 'Report New Incident'}
          </button>
        </div>

        {showForm && (
          <div className="mb-6 animate-fadeIn">
            <ReportIncidentForm onSubmit={handleSubmitIncident} />
          </div>
        )}

        <IncidentList incidents={filteredIncidents} />
      </div>
    </div>
  );
}
