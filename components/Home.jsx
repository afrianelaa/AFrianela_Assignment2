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
      email: 'andeng@test.com',
      serviceType: 'Technical',
      priority: 'High',
      status: 'In Progress',
      description: 'sample sample.',
      submittedAt: '2025-10-02T10:30:00',
    },
    {
      id: 1002,
      customerName: 'Customer02',
      email: 'customer02@test.com',
      serviceType: 'Billing',
      priority: 'Medium',
      status: 'Pending',
      description: 'Inquiry about invoice',
      submittedAt: '2025-10-02T14:45:00',
    },
    {
      id: 1003,
      customerName: 'Customer 03',
      email: 'customer03@test.com',
      serviceType: 'Complaint',
      priority: 'Urgent',
      status: 'Resolved',
      description: 'Issue with product',
      submittedAt: '2025-10-02T09:15:00',
    },
    {
      id: 1004,
      customerName: 'Customer 04',
      email: 'cutomer04@test.com',
      serviceType: 'General',
      priority: 'Low',
      status: 'Closed',
      description: 'Status check',
      submittedAt: '2025-10-02T16:20:00',
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
