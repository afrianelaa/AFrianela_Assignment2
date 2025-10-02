'use client';

export default function ServiceDetails({ requests }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getPriorityBadgeClass = (priority) => {
    const classes = {
      Low: 'badge-low',
      Medium: 'badge-medium',
      High: 'badge-high',
      Urgent: 'badge-urgent',
    };
    return `badge ${classes[priority] || 'badge-low'}`;
  };

  const getStatusBadgeClass = (status) => {
    const classes = {
      Pending: 'badge-pending',
      'In Progress': 'badge-in-progress',
      Resolved: 'badge-resolved',
      Closed: 'badge-closed',
    };
    return `badge ${classes[status] || 'badge-pending'}`;
  };

  return (
    <div className="table-container">
      <h2>Service Requests</h2>

      {requests.length === 0 ? (
        <div className="no-data">
          <p> Alert! No service requests found. Submit your first request to get started!</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Service Type</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Description</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>#{request.id}</td>
                <td>{request.customerName}</td>
                <td>{request.email}</td>
                <td>{request.serviceType}</td>
                <td>
                  <span className={getPriorityBadgeClass(request.priority)}>
                    {request.priority}
                  </span>
                </td>
                <td>
                  <span className={getStatusBadgeClass(request.status)}>
                    {request.status}
                  </span>
                </td>
                <td style={{ maxWidth: '300px' }}>{request.description}</td>
                <td>{formatDate(request.submittedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
