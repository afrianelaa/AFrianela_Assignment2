# Customer Service Management Application

A modern web application built with Next.js and React for managing customer service requests efficiently.

## Features

### 1. Service Request Form
- Submit service requests with comprehensive validation
- Required fields: Customer Name, Email, Service Type, Priority, Description
- Real-time form validation using react-hook-form
- Success/error alerts after submission
- Automatic form reset after successful submission

### 2. Service Details Table
- View all service requests in a tabular format
- Color-coded priority badges (Low, Medium, High, Urgent)
- Color-coded status badges (Pending, In Progress, Resolved, Closed)
- Formatted date and time display
- Responsive table design

### 3. Navigation
- Easy toggle between Submit Request and View Requests
- Clean, intuitive interface
- Active state indicators

### 4. Validation Rules
- **Customer Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Service Type**: Required (Technical, Billing, General, Complaint)
- **Priority Level**: Required (Low, Medium, High, Urgent)
- **Description**: Required, minimum 10 characters

## Design Theme
- Background: White
- Primary Colors: Purple (#7c3aed) and Green (#10b981)
- Gradient highlights for headers and buttons
- Clean, modern UI with smooth transitions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout component
│   ├── page.jsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Home.jsx            # Main container with navigation
│   ├── ServiceForm.jsx     # Service request form
│   └── ServiceDetails.jsx  # Service requests table
├── package.json
├── next.config.js
└── README.md
```

## Technologies Used

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **react-hook-form** - Form validation and management
- **CSS3** - Styling with modern features

## Features Implemented

✅ Form validation with error messages
✅ Success/error alerts
✅ Color-coded priority and status badges
✅ Responsive design
✅ Mock data for demonstration
✅ State management for service requests
✅ Date/time formatting
✅ Clean, modern UI with purple and green theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
