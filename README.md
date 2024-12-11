# HungerEats My Restaurant Website - MERN Stack

This repository contains a production-ready restaurant website built using the **MERN Stack** (MongoDB, Express, React, Node.js) with TypeScript for type safety and robust tools to ensure scalability, security, and modern web development practices.

## Features

### Frontend
- **React with TypeScript**: Provides type safety for cleaner and more manageable code.
- **ShadCN UI & Tailwind CSS**: Design a responsive and beautiful user interface.
- **Advanced Authentication**:
  - Login, Signup, and Logout.
  - 6-digit token-based verification.
  - Password recovery and reset.
- **Role-Based Accounts**: Secure and manage different user roles (e.g., Admin, Customer).
- **Zustand for State Management**: Lightweight and scalable global state management.
- **Advanced Searching and Filtering**: Implement powerful search and filter functionalities.
- **Loading Skeletons**: Enhance UX with elegant loading states.
- **Light/Dark Mode**: Switch between themes effortlessly.

### Backend
- **Node.js with Express**: Build scalable and efficient APIs.
- **MongoDB with Mongoose**: Schema design and database management.
- **Zod Validation**: Robust schema validation and error handling.
- **Stripe Integration**:
  - Secure payment processing.
  - Webhooks for real-time updates.
- **Mailtrap Integration**: Send and test emails efficiently.
- **JWT & 6-Digit Token Verification**: Secure user authentication.
- **Cloudinary Integration**: Manage media uploads.
- **RESTful API Design**: Build reusable and well-structured endpoints.

### Deployment
- **Render Deployment**: Seamless deployment of the application to the cloud.

## Key Learning Topics
- **TypeScript**: For strong typing and maintainable code.
- **Schema Design**: Best practices for structuring your database.
- **Zod Validation**: Handle form validation and server-side error handling.
- **Stripe Integration**: Secure online payments and real-time updates with webhooks.
- **State Management with Zustand**: Simple and powerful state management.
- **Responsive UI with Tailwind CSS**: Create modern and mobile-friendly designs.
- **Git & GitHub**: Version control and collaborative development.

## Prerequisites
Before starting, ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB
- Git

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/restaurant-website.git
cd restaurant-website
```
### 2. Install Dependencies
```bash
cd client
npm install

cd server
npm install
```
### 3. Environment Variables
Create a .env file in the backend directory and add the following:
```code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.<cluster-id>.mongodb.net/<database-name>?retryWrites=true&w=majority
PORT=5000
FRONTEND_URL=https://<your-frontend-url>/
JWT_SECRET=<your-jwt-secret>

CLOUD_NAME=<your-cloudinary-cloud-name>
API_KEY=<your-cloudinary-api-key>
API_SECRET=<your-cloudinary-api-secret>
SECRET_KEY=<your-secret-key>
MAILTRAP_API_TOKEN=<your-mailtrap-api-token>

STRIPE_PUBLISHABLE_KEY=pk_test_<your-stripe-publishable-key>
STRIPE_SECRET_KEY=sk_test_<your-stripe-secret-key>

WEBHOOK_ENDPOINT_SECRET=whsec_<your-webhook-endpoint-secret>
```
### 4. Run the Application
Server
```bash
cd backend
npm start
```
Frontend
```bash
cd client
npm run dev
```
### 5. Open in Browser
Visit http://localhost:3000 to view the application.

## Screens and Features

### Authentication Pages
- Login
- Signup
- Forgot Password
- Reset Password
- Verify Account

### Restaurant Pages
- Search and filter restaurants
- View restaurant details and menus
- Add items to cart and checkout securely

### Admin Dashboard
- Manage restaurants, menus, and orders

### User Profile
- Manage personal details
- View order history

## Tools and Libraries

### Frontend
- React
- TypeScript
- Tailwind CSS
- Zustand

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Zod

### Payments
- Stripe

### Media Management
- Cloudinary

### Emails
- Mailtrap

### Deployment Link
- https://hungereatsrestaurantapp.onrender.com/


