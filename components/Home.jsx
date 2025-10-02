'use client';

import { useState } from 'react';
import ServiceForm from './ServiceForm';
import ServiceDetails from './ServiceDetails';

export default function Home() {
  const [view, setView] = useState('form'); // 'form' or 'details'
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1001,
      customerName: 'Andeng',
      email: 'john.doe@example.com',
      serviceType: 'Technical',
      priority: 'High',
      status: 'In Progress',
      description: 'sample sample.',
      submittedAt: '2025-01-15T10:30:00',
    },
    {
      id: 1002,
      customerName: 'Jane Smith',
      email: 'jane.smith@example.com',
      serviceType: 'Billing',
      priority: 'Medium',
      status: 'Pending',
      description: 'Incorrect charge on my last invoice. Need clarification on the billing cycle.',
      submittedAt: '2025-01-16T14:45:00',
    },
    {
      id: 1003,
      customerName: 'Robert Johnson',
      email: 'robert.j@example.com',
      serviceType: 'Complaint',
      priority: 'Urgent',
      status: 'Resolved',
      description: 'Very poor customer service experience. Representative was unhelpful and rude.',
      submittedAt: '2025-01-17T09:15:00',
    },
    {
      id: 1004,
      customerName: 'Emily Davis',
      email: 'emily.davis@example.com',
      serviceType: 'General',
      priority: 'Low',
      status: 'Closed',
      description: 'General inquiry about product features and upcoming updates for the platform.',
      submittedAt: '2025-01-18T16:20:00',
    },
  ]);

  const handleNewRequest = (newRequest) => {
    setServiceRequests([newRequest, ...serviceRequests]);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Customer Service Management System</h1>
        
      </div>

      <div className="nav-buttons">
        <button
          className={`nav-button ${view === 'form' ? 'active' : ''}`}
          onClick={() => setView('form')}
        >
          Submit Request
        </button>
        <button
          className={`nav-button ${view === 'details' ? 'active' : ''}`}
          onClick={() => setView('details')}
        >
          View Requests
        </button>
      </div>

      {view === 'form' ? (
        <ServiceForm onSubmit={handleNewRequest} />
      ) : (
        <ServiceDetails requests={serviceRequests} />
      )}
    </div>
  );
}
