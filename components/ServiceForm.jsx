'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ServiceForm({ onSubmit }) {
  const [alert, setAlert] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onFormSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const newRequest = {
        id: Date.now(),
        customerName: data.customerName,
        email: data.email,
        serviceType: data.serviceType,
        priority: data.priority,
        description: data.description,
        status: 'Pending',
        submittedAt: new Date().toISOString(),
      };

      onSubmit(newRequest);
      setAlert({ type: 'success', message: 'Service request submitted successfully!' });
      reset();

      // Clear alert after 5 seconds
      setTimeout(() => setAlert(null), 5000);
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to submit request. Please try again.' });
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Service Request</h2>

      {alert && (
        <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {alert.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <label htmlFor="customerName">
            Customer Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="customerName"
            type="text"
            {...register('customerName', {
              required: 'Customer name is required',
              minLength: {
                value: 2,
                message: 'Customer name must be at least 2 characters',
              },
            })}
            placeholder="Enter customer name"
          />
          {errors.customerName && (
            <span className="error-message">{errors.customerName.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email format',
              },
            })}
            placeholder="customer@example.com"
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">
            Service Type <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="serviceType"
            {...register('serviceType', {
              required: 'Service type is required',
            })}
            defaultValue=""
          >
            <option value="" disabled>
              Select service type
            </option>
            <option value="Technical">Technical</option>
            <option value="Billing">Billing</option>
            <option value="General">General</option>
            <option value="Complaint">Complaint</option>
          </select>
          {errors.serviceType && (
            <span className="error-message">{errors.serviceType.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="priority">
            Priority Level <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="priority"
            {...register('priority', {
              required: 'Priority level is required',
            })}
            defaultValue=""
          >
            <option value="" disabled>
              Select priority level
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
          {errors.priority && (
            <span className="error-message">{errors.priority.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">
            Description <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <textarea
            id="description"
            {...register('description', {
              required: 'Description is required',
              minLength: {
                value: 10,
                message: 'Description must be at least 10 characters',
              },
            })}
            placeholder="Describe your service request in detail..."
            rows="5"
          />
          {errors.description && (
            <span className="error-message">{errors.description.message}</span>
          )}
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}
