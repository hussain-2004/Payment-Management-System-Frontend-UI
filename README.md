# 💳 Payment Management System

A web-based payment management system built with Vue, providing powerful tools for managing users, transactions, and financial operations in a business environment.

![Dashboard](./src/assets/screenshots/DASHBOARD.png)

## 🌟 Features

- **User Management**: Complete user lifecycle with role-based access control
- **Payment Processing**: Comprehensive transaction handling with real-time status tracking  
- **Analytics Dashboard**: Real-time statistics and financial summaries
- **Advanced Search**: Multi-criteria filtering across payments and users

## 📱 Application Screenshots

### 🔐 Authentication
| Login | Registration |
|-------|--------------|
| ![Login](./src/assets/screenshots/LOGIN_FORM.png) | ![Registration](./src/assets/screenshots/NEW_REGISTRATION_FORM.png) |

### 👥 User Management
| Users List | Add New User |
|------------|--------------|
| ![Users Page](./src/assets/screenshots/USERS_PAGE.png) | ![Add User](./src/assets/screenshots/ADD_NEW_USER.png) |

### 💳 Payment Management
![Payments](./src/assets/screenshots/PAYMENTS_PAGE.png)

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/hussain-2004/Payment-Management-System-Frontend-UI.git

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server

# Testing
npm test               # Run unit tests
```

## 🏗️ Project Structure

```
src/
├── assets/           # Images and screenshots
├── components/       # Reusable components
│   ├── NavbarComponent.vue
│   ├── PaymentTableComponent.vue
│   ├── RecentPaymentComponent.vue
│   ├── StatusCardComponent.vue
│   └── UserTableComponent.vue
├── data/            # Sample data
├── router/          # Route configuration
├── store/           # Vuex store
├── views/           # Page components
│   ├── DashboardPage.vue
│   ├── LoginPage.vue
│   ├── PaymentDetailsInformation.vue
│   ├── PaymentInitiationForm.vue
│   ├── PaymentListSection.vue
│   ├── RegisterPage.vue
│   ├── UserFormPage.vue
│   └── UserListPage.vue
├── App.vue          # Root component
└── main.js          # Entry point

test/                # Unit tests
├── DashboardPage.test.js
├── PaymentDetailsInformation.test.js
├── PaymentInitiationForm.test.js
├── PaymentListSection.test.js
├── PaymentTableComponent.test.js
└── UserTableComponent.test.js
```
